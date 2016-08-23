
'use strict';

var lookups = require ( '../configuration/selectors' ) ,

    /**
     * Concatenate together our CSS selector string if we have a nested selector.
     * Insert any lookups if they are available.
     *
     * @param  {String} selectors The selector name from our step definition.
     * @return {String}           The CSS selector inserting any lookups if the exist.
     */
    getSelector = function ( selectors ) {

        var selector = selectors.indexOf ( ' ' ) > - 1 ? '[data-module*="' : '[data-module="';

        return lookups [ selectors ] ? lookups [ selectors ] : selector + selectors + '"]';

    } ,

    /**
     * Prepare our selector from the
     *
     * @param  {String} selectors   The selector name from our step definition.
     * @return {String}             The combined CSS selector string include any lookups.
     */
    processSelector = function ( selector ) {

        var selectors = {
                combined    : '' ,
                resolved    : '' ,
                sub         : selector.replace ( /\s/ig , '' )
            }           ,
            combined    ,
            i           ;

        selectors.sub = selectors.sub.replace   ( '.' , ' ' );
        selectors.sub = selectors.sub.split     ( '|'       );

        for ( i = 0; i < selectors.sub.length; i ++ ) {

            selectors.resolved  =   getSelector ( selectors.sub [ i ]);
            combined            =   selectors.resolved.indexOf ( '|' ) > - 1
                                    ? processSelector ( selectors.resolved )
                                    : selectors.resolved + ' ';

            selectors.combined += combined;

        }

        return selectors.combined;

    };

module.exports = {

    /**
     * Returns a CSS selector string we can use in our step definitions. These are tied to
     * our data-selector attributes on elements we want to run tests against.
     *
     * @param  {String} selector    The CSS selector string.
     * @return {String}             The combined selector string include any lookups.
     */
    getSelector : function ( selector ) {

        return processSelector  ( selector );

    }
};
