
require ([] , function () {

    'use strict';

    require.config ({
        baseUrl : '../../'                                                                                  ,
        paths   : {
            'chai'                              : 'bower_components/chai/chai'                              ,
            'chaijquery'                        : 'bower_components/chai-jquery/chai-jquery'                ,
            'jquery'                            : 'bower_components/jquery/dist/jquery'                     ,
            'underscore'                        : 'bower_components/underscore/underscore'                  ,
            'sinon'                             : 'bower_components/sinon/lib/sinon'                        ,
            'sinonchai'                         : 'bower_components/sinon-chai/lib/sinon-chai'
        } ,
        shim : {
            'hoverintent' : {
                deps : [
                    'jquery'
                ]
            }
        }
    });

    require ([
        'chai'      ,
        'sinon'     ,
        'sinonchai' ,
        'chaijquery'
    ] ,

    function (
        chai        ,
        sinon       ,
        sinonchai   ,
        chaijquery
    ) {

        chai.use ( sinonchai );
        chai.use ( chaijquery );
        chai.should ();

        // We use chai with Mocha.
        window.expect = chai.expect;
        window.assert = chai.assert;

        // Configured Mocha
        mocha.setup ({
            globals : [
                'jQuery*'
            ] ,
            ui      : 'bdd'
        });

        require ([
            'tests/unit/specs'
        ] ,

        function () {

            //mocha.checkLeaks ();
            mocha.run ();

        });

    });

});
