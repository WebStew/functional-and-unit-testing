
'use strict';

/**
 * Utility functions we will attach to the World.
 *
 * @type {Object}
 */
module.exports = {

    /**
     * Set a random string value.
     *
     * @return {String} A random 5 character string value.
     */
    setRandomString : function () {

        var chars   = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'   ,
            string  = ''                                                                ,
            integer                                                                     ,
            i                                                                           ;

        for ( i = 0; i < 5; i ++ ) {

            integer = Math.floor ( Math.random () * chars.length    );
            string  += chars.substring ( integer , integer + 1      );

        }

        return string;

    } ,

    /**
     * Set the first letter of a string to uppercase.
     *
     * @methodsetUCFirst
     * @public
     * @param       {String} string The string to manipulate.
     * @return      {String} The string with first letter uppercased.
     * @example
     *      utilities.setUCFirst();
     */
    setUCFirst : function ( string ) {

        return string.charAt ( 0 ).toUpperCase () + string.slice ( 1 );
    }
};
