
'use strict';

var commands    = {
        setCheckBox : require ( '../commands/setCheckboxValue' ) ()
    };

// Add custom commands to the client
browser.addCommand  ( 'setCheckBoxValue' , commands.setCheckBox );

/**
 * Browser is a global variable set by WebDriverIO. Will assign it to this.client so
 * we are able to access it within our Cucumber tests.
 *
 * @type {Object}
 */
module.exports = browser;
