# [5.0.0](https://github.com/forsti0506/a11y-sitechecker/compare/v4.2.0...v5.0.0) (2021-10-09)


### Bug Fixes

* \n ignored in links ([e2d2c53](https://github.com/forsti0506/a11y-sitechecker/commit/e2d2c530c1b40d6f2b5caa58a0f077b62f9ac9eb))
* spelling in actions ([afc9eab](https://github.com/forsti0506/a11y-sitechecker/commit/afc9eabe248049389e720b350f0420f71b667b36))
* test file with skip ([6e22fbe](https://github.com/forsti0506/a11y-sitechecker/commit/6e22fbeda30d91ec0c4b666c83de61d706928bd5))
* **eslint,prettier:** new configs ([cf50e00](https://github.com/forsti0506/a11y-sitechecker/commit/cf50e007ce809c78805ea8b89248a7e504df31e9))
* **husky:** new configs for husky and commitlint ([2d8f418](https://github.com/forsti0506/a11y-sitechecker/commit/2d8f418eb30fe4378c84103c2b63845c88124ca1))
* **tests:** fix tests for changed text ([cefefdf](https://github.com/forsti0506/a11y-sitechecker/commit/cefefdf942a5cfdd3fd3af913ef187c3983fbd60))
* remove some non null assertions ([d5a8002](https://github.com/forsti0506/a11y-sitechecker/commit/d5a8002bd41c138709a48cdf816c5fb9cc5bdd1f))


### Features

* **taborder:** taborder provide 1 image per tabable object ([8c28e43](https://github.com/forsti0506/a11y-sitechecker/commit/8c28e438ddc06a3123db3a5d2eea333a1539ab7e))
* Errors are now shot by clipping the element. Performance improve + new algorithm to check it ([eb0ccbd](https://github.com/forsti0506/a11y-sitechecker/commit/eb0ccbd25bb751713b8a0df5a567236556005313))


### BREAKING CHANGES

* **taborder:** completly refectored taborder method

# [4.2.0](https://github.com/forsti0506/a11y-sitechecker/compare/v4.1.0...v4.2.0) (2021-08-29)


### Bug Fixes

* better debugging message order ([654ca7f](https://github.com/forsti0506/a11y-sitechecker/commit/654ca7f0a44488f2ed0ee75cac6b40d339c50b26))
* grammar check of consent file ([41bbf0c](https://github.com/forsti0506/a11y-sitechecker/commit/41bbf0ccf8a5794ebaeb036c19e2e1dd26eb70bf))
* no ts-ignore ([929fc89](https://github.com/forsti0506/a11y-sitechecker/commit/929fc89a47009ec68d572b84c60f09ee76802a6b))
* tests fixed ([0e838a3](https://github.com/forsti0506/a11y-sitechecker/commit/0e838a32f0b5ff02f8a93dbf2f4ce08e058bbb3f))
* update tsconfig.json and fix jest mocks ([466e41b](https://github.com/forsti0506/a11y-sitechecker/commit/466e41b260d987c169aea881aa95bbcde14f60a2))


### Features

* new Logic for tabbing images, videos instead screenshots (later on both by config) ([a9edf61](https://github.com/forsti0506/a11y-sitechecker/commit/a9edf6113ce4c6910adca53beaca8f8055a5d04f))
* Scroll down if fixed elements (like header) ([36cf881](https://github.com/forsti0506/a11y-sitechecker/commit/36cf8817292552caea25fd0fb4d560c1c4d3bf42))

# [4.1.0](https://github.com/forsti0506/a11y-sitechecker/compare/v4.0.0...v4.1.0) (2021-08-25)


### Bug Fixes

* add missing file ([88bea42](https://github.com/forsti0506/a11y-sitechecker/commit/88bea42f314befa2fd536dce1f7d64b41068bbde))


### Features

* add possibility to close cookie consents (or other popus); fix: some  bugfixes for scroll elements in view ([26dbef4](https://github.com/forsti0506/a11y-sitechecker/commit/26dbef434510d47fc9bf2662ebaacaa2a3d21b4f))

# [4.0.0](https://github.com/forsti0506/a11y-sitechecker/compare/v3.1.3...v4.0.0) (2021-08-24)


* Removed counting function. Countings are now available in the Common Result only. The results are overriden if saved as File ([30db6e6](https://github.com/forsti0506/a11y-sitechecker/commit/30db6e6c02aa2fea449c5021992edaffbb2ab8af))


### BREAKING CHANGES

* Countings are only available in common json file

## [3.1.3](https://github.com/forsti0506/a11y-sitechecker/compare/v3.1.2...v3.1.3) (2021-08-24)


### Bug Fixes

* fix issue that inapplicables are not counted correctly ([7869ad7](https://github.com/forsti0506/a11y-sitechecker/commit/7869ad7ad7d40d3c0d08131049f206de4b8d005f))

## [3.1.2](https://github.com/forsti0506/a11y-sitechecker/compare/v3.1.1...v3.1.2) (2021-08-24)


### Bug Fixes

* Readme fixes, json output for cmd fixed ([251b200](https://github.com/forsti0506/a11y-sitechecker/commit/251b2003e8bbc7ba7831889172a53c5546e3b412))

## [3.1.1](https://github.com/forsti0506/a11y-sitechecker/compare/v3.1.0...v3.1.1) (2021-05-23)


### Bug Fixes

* fixing json parse of object ([b999f99](https://github.com/forsti0506/a11y-sitechecker/commit/b999f994146b638cfbc2da9a920c8b2d61458acd))

# [3.1.0](https://github.com/forsti0506/a11y-sitechecker/compare/v3.0.0...v3.1.0) (2021-05-23)


### Features

* providedCOnfig to setupConfig and fix analyze of 1 url without crawling! ([3d8eeea](https://github.com/forsti0506/a11y-sitechecker/commit/3d8eeea155e50637719b58a79d54f2cddc277cf5))

# [3.0.0](https://github.com/forsti0506/a11y-sitechecker/compare/v2.4.1...v3.0.0) (2021-05-23)


### Bug Fixes

* husky prepare script ([efe0f43](https://github.com/forsti0506/a11y-sitechecker/commit/efe0f439d0164ec813c7e026ad898357fc6ab312))


* Name is now the major pattern ([8657ee5](https://github.com/forsti0506/a11y-sitechecker/commit/8657ee5cdd348b0c6dd1b2a97f6c8450c1aab7d6))


### BREAKING CHANGES

* Old patterns are not working anymore.

## [2.4.1](https://github.com/forsti0506/a11y-sitechecker/compare/v2.4.0...v2.4.1) (2021-05-22)


### Bug Fixes

* add Files for jest ([52c1ab2](https://github.com/forsti0506/a11y-sitechecker/commit/52c1ab21e041fe53974600d9caed9b47b344b091))
* start testing with jest. First bugfixes ([d976786](https://github.com/forsti0506/a11y-sitechecker/commit/d9767864e5a08c2bddc735521d5cfa7cb1e27080))

# [2.4.0](https://github.com/forsti0506/a11y-sitechecker/compare/v2.3.0...v2.4.0) (2021-05-21)


### Features

* add locale to result ([c323310](https://github.com/forsti0506/a11y-sitechecker/commit/c32331005420a8bbc9533edf54ed2bb0072e7ff5))

# [2.3.0](https://github.com/forsti0506/a11y-sitechecker/compare/v2.2.0...v2.3.0) (2021-05-17)


### Bug Fixes

* array in files ([0edd3e1](https://github.com/forsti0506/a11y-sitechecker/commit/0edd3e1825e1e58b043be9c2d4e98df471c4d088))
* standard config path ([65707fd](https://github.com/forsti0506/a11y-sitechecker/commit/65707fd1f2921192a413e2324f8ba7a09e016d71))


### Features

* removed mongodb, new puppeteer version ([9709790](https://github.com/forsti0506/a11y-sitechecker/commit/9709790e4f5bb0a1213e4d6eeee2e2d647844cd9))

# [2.2.0](https://github.com/forsti0506/a11y-sitechecker/compare/v2.1.1...v2.2.0) (2021-04-25)


### Features

* new structure for saving files ([48dab66](https://github.com/forsti0506/a11y-sitechecker/commit/48dab66a10e444aea07a1b425008220a8f9eb6df))

## [2.1.1](https://github.com/forsti0506/a11y-sitechecker/compare/v2.1.0...v2.1.1) (2021-04-20)


### Bug Fixes

* fixing code style errors ([d6ad6be](https://github.com/forsti0506/a11y-sitechecker/commit/d6ad6be913eb7a5cb871631c39cc4b2eb7b0ee5a))

# [2.1.0](https://github.com/forsti0506/a11y-sitechecker/compare/v2.0.2...v2.1.0) (2021-04-20)


### Features

* new calculation for tabbing order added ([b64073f](https://github.com/forsti0506/a11y-sitechecker/commit/b64073fd7964ce556cc42d4ef3567a63552677b7))

## [2.0.2](https://github.com/forsti0506/a11y-sitechecker/compare/v2.0.1...v2.0.2) (2021-04-11)


### Bug Fixes

* build piplelines ([7722315](https://github.com/forsti0506/a11y-sitechecker/commit/7722315d358a11cca0da056cdb995a9b3373beb4))

## [2.0.1](https://github.com/forsti0506/a11y-sitechecker/compare/v2.0.0...v2.0.1) (2021-04-11)


### Bug Fixes

* package lock ([2a47520](https://github.com/forsti0506/a11y-sitechecker/commit/2a47520dc9b0761ae776f4c817d33aec4776f61c))
* refactor readme.md File ([d93d241](https://github.com/forsti0506/a11y-sitechecker/commit/d93d24140ad72d38e676367d60ff21d5ac8a2e59))

# [2.0.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.11.0...v2.0.0) (2021-04-08)


* perf:first beta version ([61eedb4](https://github.com/forsti0506/a11y-sitechecker/commit/61eedb45449379e16a1100fd8ea9860471272390))


### Bug Fixes

* next build pipeline ([d0038c2](https://github.com/forsti0506/a11y-sitechecker/commit/d0038c2bb0056cbb22c7c7a3cda5c6b2340c425d))
* next build pipeline ([89a6e11](https://github.com/forsti0506/a11y-sitechecker/commit/89a6e112980d4831ce9d3b6580cffdbe4c6e8516))
* no unknown type ([3c2f4aa](https://github.com/forsti0506/a11y-sitechecker/commit/3c2f4aa71b2e1a74c447b9b1b11dff26d86fc14a))
* remove Files from test ([b7b449d](https://github.com/forsti0506/a11y-sitechecker/commit/b7b449d55ff03388f31d6ea4f383bb5b098a5671))


### Features

* ignore files in parsing ([240f1a7](https://github.com/forsti0506/a11y-sitechecker/commit/240f1a7ac20fc6541737c69455718505491854bc))


### Performance Improvements

* first 2.0 version ([3c7fa23](https://github.com/forsti0506/a11y-sitechecker/commit/3c7fa23049f6f0862d6b30ee4c0a0357bb54e6d6))
* first beta version \n\n BREAKING CHANGE:completly refactored ([7dd6c8b](https://github.com/forsti0506/a11y-sitechecker/commit/7dd6c8b205aab41d7f71dc9f12159ee74853cbfe))
* first beta version; BREAKING CHANGE:completly refactored ([7a64f9e](https://github.com/forsti0506/a11y-sitechecker/commit/7a64f9e6d6910f83b5bc823f3ac2194ce43ae390))


### BREAKING CHANGES

* completly refactored

# [1.12.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.11.0...v1.12.0) (2021-03-06)


### Features

* ignore files in parsing ([240f1a7](https://github.com/forsti0506/a11y-sitechecker/commit/240f1a7ac20fc6541737c69455718505491854bc))

# [1.11.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.10.0...v1.11.0) (2021-03-04)


### Features

* improved scrolling and waiting ([0384d79](https://github.com/forsti0506/a11y-sitechecker/commit/0384d796d7e1cd2d3162e90a1ad309c058a2a582))

# [1.10.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.9.2...v1.10.0) (2021-03-03)


### Features

* new processing for tab order ([9e18ad7](https://github.com/forsti0506/a11y-sitechecker/commit/9e18ad786af22c833525b48bb6ee2efb1277d9ed))

## [1.9.2](https://github.com/forsti0506/a11y-sitechecker/compare/v1.9.1...v1.9.2) (2021-03-02)


### Bug Fixes

* bug fixes ([0f5e827](https://github.com/forsti0506/a11y-sitechecker/commit/0f5e827432c7084b9763ae179d61882eccbadd76))

## [1.9.1](https://github.com/forsti0506/a11y-sitechecker/compare/v1.9.0...v1.9.1) (2021-03-01)


### Bug Fixes

* imagename of iteration 2 ([291487e](https://github.com/forsti0506/a11y-sitechecker/commit/291487ef1bf289b483b2f8281ad9aaa8d8f09310))

# [1.9.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.8.3...v1.9.0) (2021-03-01)


### Bug Fixes

* saveImages in config setup ([d1d921f](https://github.com/forsti0506/a11y-sitechecker/commit/d1d921fe575fd09502db3a1c850d7a7c26a1ac40))


### Features

* highlithing if keypress missing ([6b6989c](https://github.com/forsti0506/a11y-sitechecker/commit/6b6989cf20a6f36bb28c199124b11f2a63a35855))

## [1.8.3](https://github.com/forsti0506/a11y-sitechecker/compare/v1.8.2...v1.8.3) (2021-02-28)


### Bug Fixes

* catching error in expose function ([526ee4b](https://github.com/forsti0506/a11y-sitechecker/commit/526ee4bdfe6792fb05864da370117454933cf1aa))

## [1.8.2](https://github.com/forsti0506/a11y-sitechecker/compare/v1.8.1...v1.8.2) (2021-02-28)


### Bug Fixes

* result with tabable items ([252c28e](https://github.com/forsti0506/a11y-sitechecker/commit/252c28e8a09fe732551682304f810edcaa531e0d))
* type for tabaable images ([a71eb11](https://github.com/forsti0506/a11y-sitechecker/commit/a71eb1168e146b106270a1952eed6c56b704ae8d))

## [1.8.1](https://github.com/forsti0506/a11y-sitechecker/compare/v1.8.0...v1.8.1) (2021-02-28)


### Bug Fixes

* logs ([e587e0a](https://github.com/forsti0506/a11y-sitechecker/commit/e587e0a35e52ce94d38bbaf7b5ddb5f4673482c8))

# [1.8.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.7.2...v1.8.0) (2021-02-28)


### Bug Fixes

* some small fixes + tests added ([ade839f](https://github.com/forsti0506/a11y-sitechecker/commit/ade839f4351b20a0232188c096942efbf57efbd0))
* tests ([b5eca6a](https://github.com/forsti0506/a11y-sitechecker/commit/b5eca6af8d8954fa01f4bbd3992c269cbd103218))


### Features

* tabable images ([00a6491](https://github.com/forsti0506/a11y-sitechecker/commit/00a6491cb5014aa1111ef85b63ff4734db3962be))

## [1.7.2](https://github.com/forsti0506/a11y-sitechecker/compare/v1.7.1...v1.7.2) (2021-02-25)


### Bug Fixes

* some fixes ([79d0b47](https://github.com/forsti0506/a11y-sitechecker/commit/79d0b4743c54ce892e292ee9e009dce559dc3f36))

## [1.7.1](https://github.com/forsti0506/a11y-sitechecker/compare/v1.7.0...v1.7.1) (2021-02-22)


### Bug Fixes

* some bug fixes ([b4e5970](https://github.com/forsti0506/a11y-sitechecker/commit/b4e5970b99fc858357ead7bca2db54570669d99e))
* test ([80c7d99](https://github.com/forsti0506/a11y-sitechecker/commit/80c7d9982b1d94548d027dc4cee1966babf224b2))

# [1.7.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.6.4...v1.7.0) (2021-02-21)


### Bug Fixes

* ts-node added for tests ([2b8232d](https://github.com/forsti0506/a11y-sitechecker/commit/2b8232d3b30472cbc50a8d2ece35f576ad477289))


### Features

* improvements and picture feature ([b173865](https://github.com/forsti0506/a11y-sitechecker/commit/b17386529d7d687b90e632697e48d8c26710c67c))

## [1.6.4](https://github.com/forsti0506/a11y-sitechecker/compare/v1.6.3...v1.6.4) (2021-01-31)


### Bug Fixes

* runoptions for all ([12bb545](https://github.com/forsti0506/a11y-sitechecker/commit/12bb54511ca9c758dacea3f313d2bf6e35cc9e69))

## [1.6.3](https://github.com/forsti0506/a11y-sitechecker/compare/v1.6.2...v1.6.3) (2021-01-31)


### Bug Fixes

* custom tags added to model ([2da4de7](https://github.com/forsti0506/a11y-sitechecker/commit/2da4de7cecd11166d22d8b508bed2a5b2d684450))
* customtags are optional ([d97ee4a](https://github.com/forsti0506/a11y-sitechecker/commit/d97ee4a7f93c50a006267610061faab16dc3cc50))

## [1.6.2](https://github.com/forsti0506/a11y-sitechecker/compare/v1.6.1...v1.6.2) (2021-01-31)


### Bug Fixes

* idea files and run with experimental tag ([e675645](https://github.com/forsti0506/a11y-sitechecker/commit/e675645fb698555fbafa2386bc77bd1e25240cc1))

## [1.6.1](https://github.com/forsti0506/a11y-sitechecker/compare/v1.6.0...v1.6.1) (2021-01-24)


### Bug Fixes

* bug for doubling violations fixed ([4bcd165](https://github.com/forsti0506/a11y-sitechecker/commit/4bcd1659433a17e11c244536c2ddda8d437bb1c1))

# [1.6.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.5.3...v1.6.0) (2021-01-24)


### Features

* new configurations added ([efd7116](https://github.com/forsti0506/a11y-sitechecker/commit/efd71168dbe3ba1781f46e0b96c9e6705ebf93ea))

## [1.5.3](https://github.com/forsti0506/a11y-sitechecker/compare/v1.5.2...v1.5.3) (2021-01-24)


### Bug Fixes

* login improvements ([8007276](https://github.com/forsti0506/a11y-sitechecker/commit/80072766cceeb8e02ffa077b126669c3109890af))

## [1.5.2](https://github.com/forsti0506/a11y-sitechecker/compare/v1.5.1...v1.5.2) (2021-01-23)


### Bug Fixes

* new entry models ([c1ed243](https://github.com/forsti0506/a11y-sitechecker/commit/c1ed24391886c96d9e9031efd6f6453295e95528))

## [1.5.1](https://github.com/forsti0506/a11y-sitechecker/compare/v1.5.0...v1.5.1) (2021-01-23)


### Bug Fixes

* result saved not resultByUrl ([9bb418f](https://github.com/forsti0506/a11y-sitechecker/commit/9bb418f621c67f0e44a833ad390a4a5d29cdfd71))

# [1.5.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.4.0...v1.5.0) (2021-01-23)


### Bug Fixes

* folder path for axe locale ([621aa29](https://github.com/forsti0506/a11y-sitechecker/commit/621aa29073000143b3ce999fa48294403a0dbd2d))


### Features

* updated strategy for models ([d858713](https://github.com/forsti0506/a11y-sitechecker/commit/d858713a728859ddacbca25d9827f3c77c69dac9))

# [1.4.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.3.0...v1.4.0) (2021-01-21)


### Bug Fixes

* headless true in test ([906b60d](https://github.com/forsti0506/a11y-sitechecker/commit/906b60d1341da4f3b66824f542f9d8594d90c369))
* pupeteer options for test ([3870c5a](https://github.com/forsti0506/a11y-sitechecker/commit/3870c5a0966cdbff3648421a9582fe5a71f78cc2))
* rebuild the scripts ([f11bf59](https://github.com/forsti0506/a11y-sitechecker/commit/f11bf59bd139d3210396da81ef6fb3ca5e7883dd))
* test execution in build file updated ([34ce4ff](https://github.com/forsti0506/a11y-sitechecker/commit/34ce4ff07566aeec147e4ceeadc0a8cce0e76783))


### Features

* modus to define urls, some more settings and readme updated ([7db5c18](https://github.com/forsti0506/a11y-sitechecker/commit/7db5c1824c155756f14b6bdb066f7fb8304a6c32))

# [1.3.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.2.0...v1.3.0) (2021-01-18)


### Features

* refactoring + new html waiter for waiting ([a4f28ed](https://github.com/forsti0506/a11y-sitechecker/commit/a4f28ed63216cd7dbc632a5b54ac1be81fb9d8d8))

# [1.2.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.1.3...v1.2.0) (2021-01-17)


### Features

* improvements with parsing for links which are not really links (buttons,...) ([5bb8397](https://github.com/forsti0506/a11y-sitechecker/commit/5bb8397a04f13acfadc7d71a7cfd0e6e7be237a7))

## [1.1.3](https://github.com/forsti0506/a11y-sitechecker/compare/v1.1.2...v1.1.3) (2021-01-12)


### Bug Fixes

* correct input for parsing config ([7559df4](https://github.com/forsti0506/a11y-sitechecker/commit/7559df44311c00a71e901feb1e31eb3f5ec0f696))

## [1.1.2](https://github.com/forsti0506/a11y-sitechecker/compare/v1.1.1...v1.1.2) (2021-01-12)


### Bug Fixes

* pupeteer launch options added + http enabled ([ddabb45](https://github.com/forsti0506/a11y-sitechecker/commit/ddabb45ac7ad3914d02ec7d570524cb50bafe591))

## [1.1.1](https://github.com/forsti0506/a11y-sitechecker/compare/v1.1.0...v1.1.1) (2021-01-11)


### Bug Fixes

* file links are not ended with slashes anymore ([1f846cc](https://github.com/forsti0506/a11y-sitechecker/commit/1f846cc703ae375adcad81752423d0a71ac2a4c4))

# [1.1.0](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.31...v1.1.0) (2021-01-11)


### Bug Fixes

* updated dependencies ([b503a7b](https://github.com/forsti0506/a11y-sitechecker/commit/b503a7bcdc589683fd64ba7b184a3d9998cc0433))


### Features

* debug modus of semantic-release removed ([b3cb856](https://github.com/forsti0506/a11y-sitechecker/commit/b3cb856b03215181933800215ec27b010087065f))
* new parsing algorithm ([d2c9817](https://github.com/forsti0506/a11y-sitechecker/commit/d2c9817a7a5d42354772fa8b98de59c101bbaddb))

## [1.0.31](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.30...v1.0.31) (2021-01-03)


### Bug Fixes

* workflow scripts ([ae7b693](https://github.com/forsti0506/a11y-sitechecker/commit/ae7b693510de5d700e4af0d06205439b7eb07e11))

## [1.0.30](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.29...v1.0.30) (2021-01-03)


### Bug Fixes

* pr pipeline ([a43c113](https://github.com/forsti0506/a11y-sitechecker/commit/a43c113a250703aebda16fc2dce72ba17dd72fc3))
* pr pipeline ([2c5cd1a](https://github.com/forsti0506/a11y-sitechecker/commit/2c5cd1a20a2a9812e1a2a1383b9b0cf43e31c0a1))
* workflow scripts ([b4e544e](https://github.com/forsti0506/a11y-sitechecker/commit/b4e544e5ad199b3dee7f4ed4f21fdac47ec78bb0))

## [1.0.29](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.28...v1.0.29) (2021-01-03)


### Bug Fixes

* token ([88f0432](https://github.com/forsti0506/a11y-sitechecker/commit/88f0432b57bc22650dedcf79dcb5228ba2405342))

## [1.0.28](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.27...v1.0.28) (2021-01-03)


### Bug Fixes

* build script ([462dcb2](https://github.com/forsti0506/a11y-sitechecker/commit/462dcb25c469a5a7b21f96ce5ea4255160c63ad6))
* persist credentials false ([1b43417](https://github.com/forsti0506/a11y-sitechecker/commit/1b43417fd971580c8afeb6334d6df1175f4fde67))
* personal token ([bbb3e4a](https://github.com/forsti0506/a11y-sitechecker/commit/bbb3e4a2443f51aeeeb4e45ddacb1d74ef1a946f))
* prod build without source maps ([7ef068e](https://github.com/forsti0506/a11y-sitechecker/commit/7ef068e9d1c27b170787fe59764fa5be9db7b653))
* to test pr review ([bcf78c4](https://github.com/forsti0506/a11y-sitechecker/commit/bcf78c472b1b44862fd91b2149b9ec2bbc7a8b5f))

## [1.0.27](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.26...v1.0.27) (2021-01-03)


### Bug Fixes

* only valid for main branch ([150de28](https://github.com/forsti0506/a11y-sitechecker/commit/150de28ff1e1ab5afa13e5f07064ce0663b5c185))

## [1.0.26](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.25...v1.0.26) (2021-01-03)


### Bug Fixes

* mv ([3efdd8d](https://github.com/forsti0506/a11y-sitechecker/commit/3efdd8d7ed6862ceeba094433c437eed006abc79))

## [1.0.25](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.24...v1.0.25) (2021-01-03)


### Bug Fixes

* logging for moving file ([e1857d3](https://github.com/forsti0506/a11y-sitechecker/commit/e1857d339aaa085eb5329b284c51af9b71a60c66))

## [1.0.24](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.23...v1.0.24) (2021-01-03)


### Bug Fixes

* logging for moving file ([687e221](https://github.com/forsti0506/a11y-sitechecker/commit/687e221e0a6c7603f051fd413cc450270338a959))

## [1.0.23](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.22...v1.0.23) (2021-01-02)


### Bug Fixes

* move file instead of copying ([2dbcc5f](https://github.com/forsti0506/a11y-sitechecker/commit/2dbcc5f9b491292312ccc16f315951c0e4f1a872))

## [1.0.22](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.21...v1.0.22) (2021-01-02)


### Bug Fixes

* use github token ([ee7c521](https://github.com/forsti0506/a11y-sitechecker/commit/ee7c52185b12de38042b6bf0352467f87e8a4bb2))

## [1.0.21](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.20...v1.0.21) (2021-01-02)


### Bug Fixes

* build new ([f348060](https://github.com/forsti0506/a11y-sitechecker/commit/f34806037247675561d6d28e9007f5df07494cb5))

## [1.0.20](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.19...v1.0.20) (2021-01-02)


### Bug Fixes

* build yaml ([9d3563d](https://github.com/forsti0506/a11y-sitechecker/commit/9d3563dbdbc98373dd390d6306e6801654412980))

## [1.0.19](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.18...v1.0.19) (2021-01-02)


### Bug Fixes

* it fixed ([5b500b6](https://github.com/forsti0506/a11y-sitechecker/commit/5b500b6f49b9e26d9a23bb12174081a1253ad7ec))
* merge ([f107c19](https://github.com/forsti0506/a11y-sitechecker/commit/f107c190c263d9cd6415b6c8c0a3345c43763eb0))

## [1.0.15](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.14...v1.0.15) (2021-01-02)


### Bug Fixes

* semantic release debug mode ([6a7b63c](https://github.com/forsti0506/a11y-sitechecker/commit/6a7b63cfa5051bb60cee7c02ebe76c1bf65a32f9))

## [1.0.14](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.13...v1.0.14) (2021-01-02)


### Bug Fixes

* licence ([24cadac](https://github.com/forsti0506/a11y-sitechecker/commit/24cadac4d59f6b6c4d12e7fe9165f5d8fcf3a643))

## [1.0.13](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.12...v1.0.13) (2021-01-02)


### Bug Fixes

* new tag added ([e7650de](https://github.com/forsti0506/a11y-sitechecker/commit/e7650de21391de99f57b32938720445cd72c5130))

## [1.0.12](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.11...v1.0.12) (2021-01-02)


### Bug Fixes

* merges ([1a8124a](https://github.com/forsti0506/a11y-sitechecker/commit/1a8124aeff72af11563d11814ebb8cf001b21479))

## [1.0.11](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.10...v1.0.11) (2021-01-02)


### Bug Fixes

* fixes ([9ec1cd1](https://github.com/forsti0506/a11y-sitechecker/commit/9ec1cd135a9006ce4a66686430d92bed77aa59ad))
* merges ([91b5cc0](https://github.com/forsti0506/a11y-sitechecker/commit/91b5cc0912759d02a0eb86635bf55bc0a9a64bef))

## [1.0.10](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.9...v1.0.10) (2021-01-02)


### Bug Fixes

* merge conflicts ([ac683a2](https://github.com/forsti0506/a11y-sitechecker/commit/ac683a2fec96a23bc158b65b2bd495f06854001e))
* plugin update ([fbb00f2](https://github.com/forsti0506/a11y-sitechecker/commit/fbb00f229187713434e548e7bebd30195a526a3a))

## [1.0.7](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.6...v1.0.7) (2021-01-02)


### Bug Fixes

* files ([a8868ca](https://github.com/forsti0506/a11y-sitechecker/commit/a8868caa1a0f73814f508d36346c23492c92a07d))

## [1.0.6](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.5...v1.0.6) (2021-01-02)


### Bug Fixes

* update for files section ([70352c1](https://github.com/forsti0506/a11y-sitechecker/commit/70352c142c4b5fc48ca943fd5bb9d0bc733e8b3b))

## [1.0.5](https://github.com/forsti0506/a11y-sitechecker/compare/v1.0.4...v1.0.5) (2021-01-02)


### Bug Fixes

* fixing automation workflow ([2605b08](https://github.com/forsti0506/a11y-sitechecker/commit/2605b08cf41326c34d65d30289f904995425799f))
* sematnic release ([6a08142](https://github.com/forsti0506/a11y-sitechecker/commit/6a081421817ff2f32a5317c126f80592dd66aefc))
