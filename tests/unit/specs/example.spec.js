
define ( function ( require ) {

	'use strict';

	var unit    	= require ( 'unit/to.test' 	) ,
		sinon       = require ( 'sinon' 		) ,
		sandbox 	= sinon.sandbox.create () 	,

		/**
		 * jQuery cached objects
		 * @type {Object}
		 */
		elements 	= {
			body 	: $ ( 'body' 		) 	,
			page 	: $ ( '#fixtures' 	)
		} 									,

		/**
		 * Our mock object to test against
		 * @type {Object}
		 */
		mock 		= {} ,

		fixture     = '' ;

	describe( 'Something useful' , function() {

		afterEach ( function () {

			elements.page.empty 	();
			sandbox.restore 		();

		});

		beforeEach ( function ( done ) {

			elements.page.prepend   ( fixture );
			done 					();

		});

		describe ( 'Something here' , function () {

			it ( 'should return object' , function () {

				expect ( something ).to.be.an ( 'object' );

			});

		});

	});
});
