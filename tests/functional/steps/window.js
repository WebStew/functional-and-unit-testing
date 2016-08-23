
'use strict';

/**
 * Registered step definitions for user interactions and verifications
 * on the Window.
 *
 * @type {Function}
 */
module.exports = function () {

    /**
     * Given I navigate to URL.
     *
     * @param  {String}     url     URL of the page we want to navigate to. If this starts with '/' WebDriverIO will
     *                              prepend our base URL property which is set in the WebDriverIO configuration file.
     * @param  {Function}   next    The CucumberJS callback.
     * @return {Promise}            Navigate the client to the URL value.
     */
    this.Given (
        /^I navigate to "(.*)"$/ ,
        function (
            url ,
            next
        ) {

            return this.client
                .url    ( url )
                .call   ( next );

        }.bind ( this )
    );

    /**
     * Given I set the viewport to WIDTH by HEIGHT.
     *
     * @param  {Number}     width   The width in pixels to set the client width to.
     * @param  {Number}     height  The height in pixels to set the client height to.
     * @param  {Function}   next    The CucumberJS callback.
     * @return {Promise}            Change the client resolution.
     */
    this.Given (
        /^I set the viewport to "(.*)" by "(.*)"$/ ,
        function (
            width   ,
            height  ,
            next
        ) {

            return this.client
                .setViewportSize ({
                    height  : parseInt ( height ) ,
                    width   : parseInt ( width  )
                })
                .call ( next );

        }.bind ( this )
    );

};
