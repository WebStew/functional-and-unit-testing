
'use strict';

module.exports = function ( grunt ) {

    return {
        grunt   : grunt.file.readJSON ( 'package.json' )
    };
};
