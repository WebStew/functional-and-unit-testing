
'use strict';

var chai = {
    async   : require ( 'chai-as-promised'  ) ,
    sync    : require ( 'chai'              )
};

chai.sync.use       ( chai.async );
chai.sync.Should    ();

/**
 * Add Chai BDD and TDD to our this.client
 * so that it is available within our step definitions.
 *
 * @type {Object}
 */
module.exports =  {
    assert : chai.sync.assert ,
    expect : chai.sync.expect
};
