
'use strict';

module.exports = function ( grunt ) {

	var directories = require ( '../../../grunt/configuration/directories'	) ( grunt ) ,
		files		= require ( '../../../grunt/configuration/files'		) ( grunt ) ;

	grunt.config.set ( 'express' , {
		grunt 			: {
			options 	: {
				script	: './' + directories.application + '/' + files.application.server
			}
		}
	});

    grunt.loadNpmTasks ( 'grunt-express-server' );

};
