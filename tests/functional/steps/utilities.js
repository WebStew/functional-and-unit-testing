
'use strict';

/**
 * Registered step definitions for utility user interactions and verification.
 *
 * @type {Function}
 */
module.exports  = function () {

    /**
     * Then I wait SECONDS seconds.
     * @param  {Number}     seconds The number of seconds to wait.
     * @param  {Function}   next    The CucumberJS callback
     * @return {Promise}            Wait the allocated amount of seconds.
     */
    this.Then (
        /^I wait "(\d+)" seconds?$/ ,
        function (
            seconds ,
            next
        ) {

            seconds =  parseInt ( seconds , 10 );

            return this.client
                .pause  ( seconds * 1000    )
                .call   ( next              );

        }.bind ( this )
    );

    /**
     * Then I wait for the page to load.
     *
     * @param  {Function} next  The CucumberJS callback.
     * @return {Promise}        WebDriverIO will wait until our implicit condition has been met.
     */
    this.Then (
        /^I wait for the page to load?$/ ,
        function ( next ) {

            return this.client
                .waitUntil ( function () {

                    return this.client
                        .getAttribute   ( 'html' , 'data-load' )
                        .then           ( function ( value ) {

                            return value === 'complete';

                        }.bind ( this ));

                }.bind  ( this ))
                .call   ( next );

        }.bind ( this )
    );

    /**
     * Then I wait for ELEMENT to become available.
     *
     * @param  {String}     selector    The data-test-selector attribute value for given element.
     * @param  {Function}   next        The CucumberJS callback.
     * @return {Promise}                WebDriverIO will wait until our implicit condition has been met.
     */
    this.Then (
        /^I wait for "(.*)" to become available?$/ ,
        function (
            selector ,
            next
        ) {

            selector = this.getSelector ( selector );

            return this.client
                .waitForExist   ( selector , this.timeout )
                .then           ( function () {

                    return this.client
                        .waitForVisible ( selector , this.timeout );

                }.bind  ( this ))
                .call   ( next );

        }.bind ( this )
    );

};
