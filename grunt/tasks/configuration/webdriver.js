
'use strict';

module.exports = function ( grunt ) {

    grunt.config.set ( 'webdriver' , {
        test    : {
            configFile : './tests/functional/configuration/webdriver.js'
        }
    });

    grunt.loadNpmTasks ( 'grunt-webdriver' );

};
