
'use strict';

/**
 * Registered definition steps for verifying.
 *
 * @type {Function}
 */
module.exports = function () {

    /**
     * Then I should expect SELECTOR to ( ? NOT ) be visible.
     *
     * @param  {String} selector    The data-test-selector attribute value for given element.
     * @param  {[Function]} next    The Cucmber callback function.
     * @return {Boolean}            Is our step true or false.
     */
    this.Then (
        /^I should expect "(.*)" to( not)? be visible$/ ,
        function (
            selector    ,
            not         ,
            next
        ) {

            selector = this.getSelector ( selector );

            return this.client
                .isExisting ( selector )
                .then       ( function ( exists ) {

                    if ( exists ) {

                        return this.client
                            .isVisible  ( selector )
                            .then       ( function ( visible ) {

                                return this.expect ( visible ).to.equal ( ! not );

                            }.bind ( this ));
                    }

                    else {

                        return this.assert ( true === false , 'Expected element to exist but it does not.' );

                    }

                }.bind ( this ))
                .call ( next );

        }.bind ( this )
    );

    /**
     * Then I should expect SELECTOR with attribute ATTRIBUTE to ( ? NOT ) OPERATOR VALUE.
     *
     * @param  {String} selector    The data-test-selector attribute value for given element.
     * @param  {String} attribute   The attribute of the element we want to validate against.
     * @param  {String} not         Indicate if our validation should be false.
     * @param  {String} operator    The operator we want to use ( contain equal match )
     * @param  {String} value       The value of what the attribute should or shouldn't be.
     * @param  {[Function]} next    The Cucmber callback function.
     * @return {Boolean}            Is our step true or false.
     */
    this.Then (
        /^I should expect "(.*)" with attribute "(.*)" to( not)? "(.*)" "(.*)"$/ ,
        function (
            selector    ,
            attribute   ,
            not         ,
            operator    ,
            value       ,
            next
        ) {

            selector = this.getSelector ( selector );

            return this.client
                .getAttribute ( selector , attribute  )
                .then ( function ( result ) {

                    if ( not ) {
                        return this.expect ( result ).to.not  [ operator ] ( value );
                    }

                    else {
                        return this.expect ( result ).to      [ operator ] ( value );
                    }

                }.bind  ( this ))
                .call   ( next );

        }.bind ( this )
    );

    /**
     * Then I should expect SELECTOR to ( ? NOT ) exist.
     *
     * @param  {String}     selector    The data-test-selector attribute value for given element.
     * @param  {String}     not         Indicate if our validation should be false.
     * @param  {[Function]} next        The Cucmber callback function.
     * @return {Boolean}                Is our step true or false.
     */
    this.Then (
        /^I should expect "(.*)" to( not)? exist$/ ,
        function (
            selector    ,
            not         ,
            next
        ) {

            selector = this.getSelector ( selector );

            return this.client.isExisting ( selector ).then ( function ( exists ) {
                return this.expect ( exists ).to.equal ( ! not )
            }.bind ( this )).call ( next );

        }.bind ( this )
    );

};
