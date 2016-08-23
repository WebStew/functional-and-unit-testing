
'use strict';

/**
 * Custom commands for WebDriverIO to set the value on checkbox inputs.
 *
 * @return {Function} Callback
 */
module.exports = function () {

    return function ( selector , state , callback ) {

        return this.elements ( selector ).then ( function ( result ) {

            result.value.forEach ( function ( element ) {

                this.elementIdSelected ( element.ELEMENT ).then ( function ( result ) {

                    if ( !! result.value !== state ) {
                        this.elementIdClick ( element.ELEMENT );
                    }

                }.bind  ( this      ));
            }.bind      ( this      ))
        }.bind          ( this      ))
        .call           ( callback  );
    };
};
