
'use strict';

/**
 * Manually start Selenium Server with the following commands.
 *
 * START
 * java -jar selenium-server-standalone-2.51.0.jar -Dwebdriver.chrome.driver=chromedriver.exe
 *
 * STOP
 * http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
 */

module.exports = function ( grunt ) {

    grunt.config.set ( 'selenium_standalone' , {
        test                    : {
            seleniumVersion     : '2.50.1'                                          ,
            seleniumDownloadURL : 'http://selenium-release.storage.googleapis.com'  ,
            drivers             : {
                chrome          : {
                    arch        : process.arch                                      ,
                    baseURL     : 'http://chromedriver.storage.googleapis.com'      ,
                    version     : '2.21'
                }
            }
        }
    });

    grunt.loadNpmTasks ( 'grunt-selenium-standalone' );

};
