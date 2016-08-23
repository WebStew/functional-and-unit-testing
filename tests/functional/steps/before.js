
'use strict';

var world = require ( '../support/world.js' );

/**
 * Registered definition steps to run before any tests.
 *
 * @type {Function}
 */
module.exports = function () {

    /**
     * Sets up the world environment on this and changes the viewport
     * of the client to a large desktop resolution.
     *
     * @param  {[Function]} next    The Cucmber callback function.
     * @return {[Function]}         Click | focus on element.
     */
    this.Before ( function ( next ) {

        // Setup the world
        world.call ( this );

        // Set a deskop viewport size
        return this.client
            .setViewportSize ({
                height  : 1050 ,
                width   : 1680
            })
            .call ( next );

    }.bind ( this ));

};
