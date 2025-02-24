import { Page } from 'puppeteer';
import { debug, error, log, waitForHTML } from './helper-functions';
import chalk from 'chalk';
import { Config } from '../models/config';
import { saveScreenshot } from './helper-saving-screenshots';

export async function executeLogin(page: Page, config: Config): Promise<number> {
    if (!config.login || !config.login.url) {
        debug(config.debugMode, 'No Login specified');
        return 0;
    }
    let failedLoads = 0;
    let failed = true;
    while (failedLoads < 3 && failed) {
        failed = false;
        try {
            try {
                debug(config.debugMode, 'Navigating to url: ' + config.login.url);
                await page.goto(config.login.url, { waitUntil: 'networkidle2' });
                await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: config.timeout });
            } catch (e: any) {
                error(e);
            }
            await waitForHTML(page, config.timeout, config.debugMode);
            await saveScreenshot(page, config.imagesPath, 'loginSite.png', config.saveImages);
        } catch (e) {
            failedLoads++;
            failed = true;
            error('Error in opening LoginPage' + e);
        }
    }

    for (const step of config.login?.steps) {
        for (const input of step.input) {
            await page.waitForSelector(input.selector, { timeout: config.timeout });
            debug(config.debugMode, 'Waited for selector ' + input.selector);
            await page.type(input.selector, input.value);
        }
        debug(config.debugMode, 'Clicking submit: ' + step.submit);
        await page.click(step.submit);
    }
    try {
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        debug(config.debugMode, 'Navigation finished: ' + page.url());
        await waitForHTML(page);
        await saveScreenshot(page, config.imagesPath, 'afterLogin.png', config.saveImages);
    } catch (e) {
        // eslint-disable-next-line
        log(chalk.red('No Navigation after Login. Please check if it\'s working as expected!'));
    }
    debug(config.debugMode, 'Finished Login Script: ' + config.login.url);
    return 1;
}
