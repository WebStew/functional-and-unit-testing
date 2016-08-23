
'use strict';

module.exports = function ( grunt ) {

    var directories = require ( '../../../grunt/configuration/directories'  ) ( grunt ) ,
        files       = require ( '../../../grunt/configuration/files'        ) ( grunt ) ;

    grunt.config.set ( 'blanket_mocha' , {
        unit        : {
            options : {
                log         : true      ,
                logErrors   : true      ,
                reporter    : 'Spec'    ,
                run         : false     ,
                threshold   : 2
            }                           ,
            src     : [
                directories.library.tests.unit + '/' + files.tests.unit.runner
            ]
        }
    });

    grunt.loadNpmTasks ( 'grunt-blanket-mocha' );

};
