
'use strict';

module.exports = function ( grunt ) {

    grunt.registerTask ( 'test:unit' , function () {

        grunt.task.run ([
            'eslint'                ,
            'blanket_mocha:unit'
        ]);

    });

    grunt.registerTask ( 'test:functional' , function () {

        grunt.task.run ([
            'selenium_standalone:test:install'  ,
            'selenium_standalone:test:start'    ,
            'env:grunt'                         ,
            'express:grunt:start'               ,
            'webdriver'                         ,
            'express:grunt:stop'                ,
            'env:development'                   ,
            'selenium_standalone:test:stop'
        ]);

    });

    grunt.registerTask ( 'test' , function () {

        grunt.task.run ([
            'test:unit'         ,
            'test:functional'
        ]);

    });

};

