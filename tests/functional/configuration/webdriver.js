
'use strict';

var configuration = {
        environment : require ( '../configuration/environment' )
    };

/**
 * WebDriverIO configuration file.
 * http://webdriver.io/guide/testrunner/configurationfile.html
 *
 * @type {Object}
 */
exports.config = {
    baseUrl         : configuration.environment.host + ':' + configuration.environment.port     ,
    capabilities    : [
        {
            browserName : 'chrome'
        }
    ]                                                                                           ,
    coloredLogs     : true                                                                      ,
    cucumberOpts    : {
        ignoreUndefinedDefinitions  : false                                                     ,
        require                     : [
            './tests/functional/steps/*.js'
        ]                                                                                       ,
        tags        : ''
    }                                                                                           ,
    framework       : 'cucumber'                                                                ,
    host            : '127.0.0.1'                                                               ,
    logLevel        : 'silent'                                                                  ,
    path            : '/wd/hub'                                                                 ,
    port            : 4444                                                                      ,
    reporter        : 'dot'                                                                     ,
    //reporter        : 'spec'                                                                   ,
    reporterOptions : {
        outputDir   : './tests/functional/reports'
    }                                                                                           ,
    screenshotPath  : './tests/functional/screenshots'                                          ,
    specs           : [
        './tests/functional/features/example.feature'
    ]                                                                                           ,
    waitforTimeout  : 10000
};
