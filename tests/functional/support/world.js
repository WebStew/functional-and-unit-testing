
'use strict';

    /**
     * Configuration options and methods to attached to CucumberJS
     *
     * @type {Object}
     */
var configuration   = {
        client      : require ( '../configuration/client'       ) ,
        environment : require ( '../configuration/environment'  ) ,
        test        : require ( '../configuration/test'         )
    }                                                           ,

    /**
     * Utility options and methods to attached to CucumberJS
     *
     * @type {Object}
     */
    utilities       = {
        selectors   : require ( '../utilities/selectors'        ) ,
        strings     : require ( '../utilities/strings'          )
    };

/**
 * Sets the configuration options for the CucumberJS world.
 *
 * @return {Object} CucumberJS this context
 */
module.exports  =  function () {

    // Setup environment and client
    this.url        = configuration.environment.url + ':' + configuration.environment.port;
    this.client     = configuration.client;

    // Setup utility methods
    this.timeout            = 10000;
    this.getSelector        = utilities.selectors.getSelector;
    this.setRandomString    = utilities.strings.setRandomString;

    // Setup testing method
    this.assert = configuration.test.assert;
    this.expect = configuration.test.expect;

    return this;

};
