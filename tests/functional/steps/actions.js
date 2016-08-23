
'use strict';

var utilities   = {
        string      : require ( '../utilities/strings' )
    };

/**
 * Registered definition steps for any user actions.
 *
 * @type {Function}
 */
module.exports = function () {

    /**
     * When I [ Click | Focus ] on SELECTOR.
     *
     * @param  {String}     selector    The data-test-selector attribute value for given element.
     * @param  {Function}   next        The Cucumber callback function.
     * @return {Promise}                Click | focus on element.
     */
    this.When (
        /^I (?:click|focus) on "([^"]*)"$/ ,
        function (
            selector ,
            next
        ) {

            selector = this.getSelector ( selector );

            return this.client
                .click  ( selector  )
                .call   ( next      );

        }.bind ( this )
    );

    /**
     * When I press the KEYCODE key.
     *
     * @param  {String}     keycode     The user friendly description fo the key to be pressed.
     * @param  {Function}   next        The Cucumber callback function.
     * @return {Promise}                Click | focus on element.
     */
    this.When (
        /^I press the "(.*)" key$/ ,
        function (
            keycode ,
            next
        ) {

            keycode = utilities.string.setUCFirst ( keycode );

            return this.client
                .keys ( keycode )
                .call ( next    );

        }.bind ( this )
    );

};
