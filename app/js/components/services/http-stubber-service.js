define(['../components.module'], function(module) {
    'use strict';

    function httpStubberService($httpBackend) {

        function forRouteRequest() {

            return {
                respond: function() {
                    $httpBackend.whenPOST('/routes', function(requestBody) {
                        return true;
                    }).respond(function() {
                        var response = {
                            'routes': [{
                                'type': 'public_transport',
                                'provider': 'vbb',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.530227,
                                        'lng': 13.403356,
                                        'datetime': '2015-04-17T13:30:00+02:00',
                                        'name': null,
                                        'properties': null
                                    }, {
                                        'lat': 52.528187,
                                        'lng': 13.410404,
                                        'datetime': '2015-04-17T13:38:00+02:00',
                                        'name': 'U Rosa-Luxemburg-Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpABuAFcAp@yHvAwNr@iGPwAh@a@jAg@'
                                }, {
                                    'name': 'U2',
                                    'num_stops': 8,
                                    'stops': [{
                                        'lat': 52.528187,
                                        'lng': 13.410404,
                                        'datetime': '2015-04-17T13:38:00+02:00',
                                        'name': 'U Rosa-Luxemburg-Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.522074,
                                        'lng': 13.413595,
                                        'datetime': '2015-04-17T13:40:00+02:00',
                                        'name': 'S+U Alexanderplatz',
                                        'properties': null
                                    }, {
                                        'lat': 52.517229,
                                        'lng': 13.412454,
                                        'datetime': '2015-04-17T13:42:00+02:00',
                                        'name': 'U Klosterstr.',
                                        'properties': null
                                    }, {
                                        'lat': 52.512006,
                                        'lng': 13.408768,
                                        'datetime': '2015-04-17T13:43:00+02:00',
                                        'name': 'U Märkisches Museum',
                                        'properties': null
                                    }, {
                                        'lat': 52.511305,
                                        'lng': 13.40235,
                                        'datetime': '2015-04-17T13:45:00+02:00',
                                        'name': 'U Spittelmarkt',
                                        'properties': null
                                    }, {
                                        'lat': 52.513363,
                                        'lng': 13.395347,
                                        'datetime': '2015-04-17T13:47:00+02:00',
                                        'name': 'U Hausvogteiplatz',
                                        'properties': null
                                    }, {
                                        'lat': 52.512168,
                                        'lng': 13.389711,
                                        'datetime': '2015-04-17T13:49:00+02:00',
                                        'name': 'U Stadtmitte U2',
                                        'properties': null
                                    }, {
                                        'lat': 52.511521,
                                        'lng': 13.383796,
                                        'datetime': '2015-04-17T13:50:00+02:00',
                                        'name': 'U Mohrenstr.',
                                        'properties': null
                                    }, {
                                        'lat': 52.509067,
                                        'lng': 13.37798,
                                        'datetime': '2015-04-17T13:51:00+02:00',
                                        'name': 'S+U Potsdamer Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'subway',
                                    'description': 'S+U Potsdamer Platz',
                                    'color': '#d64820',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/subway.svg',
                                    'polyline': 'elr_I_fzpAfe@_Sf]dFr_@~UjCbg@yKvj@lFfb@`C|c@hNjc@'
                                }],
                                'properties': null,
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 270
                                }
                            }, {
                                'type': 'public_transport',
                                'provider': 'vbb',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.530227,
                                        'lng': 13.403356,
                                        'datetime': '2015-04-17T13:32:00+02:00',
                                        'name': null,
                                        'properties': null
                                    }, {
                                        'lat': 52.529778,
                                        'lng': 13.401397,
                                        'datetime': '2015-04-17T13:35:00+02:00',
                                        'name': 'U Rosenthaler Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpABrCLnF'
                                }, {
                                    'name': '142',
                                    'num_stops': 5,
                                    'stops': [{
                                        'lat': 52.529778,
                                        'lng': 13.401397,
                                        'datetime': '2015-04-17T13:35:00+02:00',
                                        'name': 'U Rosenthaler Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.528474,
                                        'lng': 13.394205,
                                        'datetime': '2015-04-17T13:37:00+02:00',
                                        'name': 'Tucholskystr.',
                                        'properties': null
                                    }, {
                                        'lat': 52.527297,
                                        'lng': 13.387392,
                                        'datetime': '2015-04-17T13:38:00+02:00',
                                        'name': 'Torstr./U Oranienburger Tor',
                                        'properties': null
                                    }, {
                                        'lat': 52.528375,
                                        'lng': 13.37976,
                                        'datetime': '2015-04-17T13:41:00+02:00',
                                        'name': 'Robert-Koch-Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.528762,
                                        'lng': 13.376928,
                                        'datetime': '2015-04-17T13:43:00+02:00',
                                        'name': 'Invalidenpark',
                                        'properties': null
                                    }, {
                                        'lat': 52.525849,
                                        'lng': 13.368928,
                                        'datetime': '2015-04-17T13:45:00+02:00',
                                        'name': 'S+U Berlin Hauptbahnhof',
                                        'properties': null
                                    }],
                                    'travel_mode': 'bus',
                                    'description': 'U Leopoldplatz',
                                    'color': '#b20077',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/bus.svg',
                                    'polyline': 'cvr_IwmxpAdG|k@hFri@wEtn@kAtPdQ~p@'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.525849,
                                        'lng': 13.368928,
                                        'datetime': '2015-04-17T13:45:00+02:00',
                                        'name': 'S+U Berlin Hauptbahnhof',
                                        'properties': null
                                    }, {
                                        'lat': 52.525849,
                                        'lng': 13.368928,
                                        'datetime': '2015-04-17T13:47:00+02:00',
                                        'name': 'S+U Berlin Hauptbahnhof',
                                        'properties': null
                                    }],
                                    'travel_mode': 'change',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/change.svg',
                                    'polyline': null
                                }, {
                                    'name': 'M41',
                                    'num_stops': 1,
                                    'stops': [{
                                        'lat': 52.525849,
                                        'lng': 13.368928,
                                        'datetime': '2015-04-17T13:47:00+02:00',
                                        'name': 'S+U Berlin Hauptbahnhof',
                                        'properties': null
                                    }, {
                                        'lat': 52.510145,
                                        'lng': 13.376659,
                                        'datetime': '2015-04-17T13:53:00+02:00',
                                        'name': 'S Potsdamer Platz Bhf/Voßstr.',
                                        'properties': null
                                    }],
                                    'travel_mode': 'bus',
                                    'description': 'Sonnenallee/Baumschulenstr.',
                                    'color': '#b20077',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/bus.svg',
                                    'polyline': 'q}q_IybrpAbaBio@'
                                }],
                                'properties': null,
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 270
                                }
                            }, {
                                'type': 'public_transport',
                                'provider': 'vbb',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.530227,
                                        'lng': 13.403356,
                                        'datetime': '2015-04-17T13:35:00+02:00',
                                        'name': null,
                                        'properties': null
                                    }, {
                                        'lat': 52.528187,
                                        'lng': 13.410404,
                                        'datetime': '2015-04-17T13:43:00+02:00',
                                        'name': 'U Rosa-Luxemburg-Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpABuAFcAp@yHvAwNr@iGPwAh@a@jAg@'
                                }, {
                                    'name': 'U2',
                                    'num_stops': 8,
                                    'stops': [{
                                        'lat': 52.528187,
                                        'lng': 13.410404,
                                        'datetime': '2015-04-17T13:43:00+02:00',
                                        'name': 'U Rosa-Luxemburg-Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.522074,
                                        'lng': 13.413595,
                                        'datetime': '2015-04-17T13:45:00+02:00',
                                        'name': 'S+U Alexanderplatz',
                                        'properties': null
                                    }, {
                                        'lat': 52.517229,
                                        'lng': 13.412454,
                                        'datetime': '2015-04-17T13:47:00+02:00',
                                        'name': 'U Klosterstr.',
                                        'properties': null
                                    }, {
                                        'lat': 52.512006,
                                        'lng': 13.408768,
                                        'datetime': '2015-04-17T13:48:00+02:00',
                                        'name': 'U Märkisches Museum',
                                        'properties': null
                                    }, {
                                        'lat': 52.511305,
                                        'lng': 13.40235,
                                        'datetime': '2015-04-17T13:50:00+02:00',
                                        'name': 'U Spittelmarkt',
                                        'properties': null
                                    }, {
                                        'lat': 52.513363,
                                        'lng': 13.395347,
                                        'datetime': '2015-04-17T13:52:00+02:00',
                                        'name': 'U Hausvogteiplatz',
                                        'properties': null
                                    }, {
                                        'lat': 52.512168,
                                        'lng': 13.389711,
                                        'datetime': '2015-04-17T13:54:00+02:00',
                                        'name': 'U Stadtmitte U2',
                                        'properties': null
                                    }, {
                                        'lat': 52.511521,
                                        'lng': 13.383796,
                                        'datetime': '2015-04-17T13:55:00+02:00',
                                        'name': 'U Mohrenstr.',
                                        'properties': null
                                    }, {
                                        'lat': 52.509067,
                                        'lng': 13.37798,
                                        'datetime': '2015-04-17T13:56:00+02:00',
                                        'name': 'S+U Potsdamer Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'subway',
                                    'description': 'S+U Potsdamer Platz',
                                    'color': '#d64820',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/subway.svg',
                                    'polyline': 'elr_I_fzpAfe@_Sf]dFr_@~UjCbg@yKvj@lFfb@`C|c@hNjc@'
                                }],
                                'properties': null,
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 270
                                }
                            }, {
                                'type': 'car_sharing',
                                'provider': 'drivenow',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5302356,
                                        'lng': 13.4033659,
                                        'datetime': '2015-04-17T12:29:00+01:00',
                                        'name': 'Torstraße 103, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.528989,
                                        'lng': 13.402612,
                                        'datetime': '2015-04-17T12:33:00+01:00',
                                        'name': 'Linienstraße 204-206, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpA?d@?X@V@z@FdD@`@@T@P??FIHILI~@e@`Ak@??AaC'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.528989,
                                        'lng': 13.402612,
                                        'datetime': '2015-04-17T12:33:00+01:00',
                                        'name': 'Linienstraße 204-206, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.528989,
                                        'lng': 13.402612,
                                        'datetime': '2015-04-17T12:35:00+01:00',
                                        'name': 'Linienstraße 204-206, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'setup',
                                    'description': null,
                                    'color': '#0096b2',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/setup.svg',
                                    'polyline': null
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.528989,
                                        'lng': 13.402612,
                                        'datetime': '2015-04-17T12:35:00+01:00',
                                        'name': 'Linienstraße 204-206, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:48:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'driving',
                                    'description': null,
                                    'color': '#0096b2',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/driving.svg',
                                    'polyline': 'cqr_IiuxpAAeB?G?GTiEXkE??cCk@??B]rAiNN{AV}BHq@D[Ho@Fg@Fa@Hk@VqCDe@Fa@Jk@Hc@vBqLDSDOHUNc@L]LYNYLWLWZq@??@AHWLY\\y@P_@La@Tm@Ro@d@_BPi@Ro@Tw@XqARq@V{@t@eC??LNvBvB??JBb@b@DDlAlAb@d@VVV\\fBxBl@t@rCnCtDnDNPNN@Bf@p@v@jABH`@x@L\\Pd@JZHVFNlAjDrAdDb@~@FPBT??j@hAXh@`@j@b@n@X`@TXTZfBxB\\b@RTb@h@\\`@\\^\\^h@j@\\^Z\\\\^^d@JNLNzAhB`@f@Z`@Z\\Z^p@z@z@nA\\d@Zh@p@fAdBpCz@vAf@x@f@x@PXT^P\\JVLXFLDNDJDLJf@H`@FX@LBNBND^BTBPBR@ZBx@@H@L@LDf@?NF~BHjCBpAFhBD`CN`GRzGBv@B|@Bl@Bv@@d@BZ@TBLBPBDDP@D@F@JDp@@\\DHPjGBdA@V@j@VhKBn@Bp@H`EFhCPjGZnL\\xM@^??VE^EDAD@FDv@hA@FBnA@d@D~AABGP'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:48:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:52:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'parking',
                                    'description': null,
                                    'color': '#0096b2',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/parking.svg',
                                    'polyline': null
                                }],
                                'properties': {
                                    'address': 'Linienstraße 72, 10119 Berlin',
                                    'model': 'BMW X1',
                                    'license_plate': 'M-DX9224',
                                    'fuel_level': 72,
                                    'engine_type': 'Diesel',
                                    'internal_cleanliness': 'Good',
                                    'description': 'Jorge',
                                    'seats': null,
                                    'doors': null
                                },
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 578
                                }
                            }, {
                                'type': 'car_sharing',
                                'provider': 'car2go',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5302356,
                                        'lng': 13.4033659,
                                        'datetime': '2015-04-17T12:29:00+01:00',
                                        'name': 'Torstraße 103, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.53115,
                                        'lng': 13.40369,
                                        'datetime': '2015-04-17T12:35:00+01:00',
                                        'name': 'Zehdenicker Straße 12, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpA?g@Bm@@_@Dc@h@eG??gDqAO???CX}BlK'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.53115,
                                        'lng': 13.40369,
                                        'datetime': '2015-04-17T12:35:00+01:00',
                                        'name': 'Zehdenicker Straße 12, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.53115,
                                        'lng': 13.40369,
                                        'datetime': '2015-04-17T12:37:00+01:00',
                                        'name': 'Zehdenicker Straße 12, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'setup',
                                    'description': null,
                                    'color': '#00a4f1',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/setup.svg',
                                    'polyline': null
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.53115,
                                        'lng': 13.40369,
                                        'datetime': '2015-04-17T12:37:00+01:00',
                                        'name': 'Zehdenicker Straße 12, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:52:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'driving',
                                    'description': null,
                                    'color': '#00a4f1',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/driving.svg',
                                    'polyline': 'y~r_Ie|xpA|BmKBYDWDWJ]L[hCiF??uCwBKC??BQl@aDfAwF??dAv@|@n@~@n@??PNHJD[Ho@Fg@Fa@Hk@VqCDe@Fa@Jk@Hc@vBqLDSDOHUNc@L]LYNYLWLWZq@??@AHWLY\\y@P_@La@Tm@Ro@d@_BPi@Ro@Tw@XqARq@V{@t@eC??LNvBvB??JBb@b@DDlAlAb@d@VVV\\fBxBl@t@rCnCtDnDNPNN@Bf@p@v@jABH`@x@L\\Pd@JZHVFNlAjDrAdDb@~@FPBT??j@hAXh@`@j@b@n@X`@TXTZfBxB\\b@RTb@h@\\`@\\^\\^h@j@\\^Z\\\\^^d@JNLNzAhB`@f@Z`@Z\\Z^p@z@z@nA\\d@Zh@p@fAdBpCz@vAf@x@f@x@PXT^P\\JVLXFLDNDJDLJf@H`@FX@LBNBND^BTBPBR@ZBx@@H@L@LDf@?NF~BHjCBpAFhBD`CN`GRzGBv@B|@Bl@Bv@@d@BZ@TBLBPBDDP@D@F@JDp@@\\DHPjGBdA@V@j@VhKBn@Bp@H`EFhCPjGZnL\\xM@^??VE^EDAD@FDv@hA@FBnA@d@D~AABGP'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:52:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:56:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'parking',
                                    'description': null,
                                    'color': '#00a4f1',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/parking.svg',
                                    'polyline': null
                                }],
                                'properties': {
                                    'address': 'Zehdenicker Straße 16, 10119 Berlin',
                                    'model': 'Smart Fortwo',
                                    'license_plate': 'B-GO2784',
                                    'fuel_level': 27,
                                    'engine_type': 'Gasoline',
                                    'internal_cleanliness': 'Good',
                                    'description': null,
                                    'seats': null,
                                    'doors': null
                                },
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 551
                                }
                            }, {
                                'type': 'private_bike',
                                'provider': 'google',
                                'segments': [{
                                    'name': 'Cycling',
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5302356,
                                        'lng': 13.4033659,
                                        'datetime': '2015-04-17T12:29:00+01:00',
                                        'name': 'Torstraße 103, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:46:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'cycling',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/cycling.svg',
                                    'polyline': 'uvr_I{yxpA?d@?X@V@z@FdD@`@@T@P@F@L@N??\\W~BgBRYtByATQRO^[r@a@j@e@VQPMNGLGDCt@WjB]LCNEJANAL?J@H@J@HDNDLFrAh@NDb@TNHlAn@\\PNNNNdAhA??BKJ[FMLa@??DHTZFDBBPTDH~AhDDJxAfDH^??LKLEJGFAB?DAN@T@H?FADAFAfAUHELGTMTQBC@C@E??^YlB_Bj@k@zC_DPS??Rt@DLt@pCn@hCrA|EHXFXJj@Dj@?@Dx@?DBr@D`A?HDt@VfI@FJ|EPxH@N?V?NANALAHBxAN~JPdI@n@?H@L?H@f@RvFRjHFnCBbADzA@r@j@hS??PrF??PzFHRBF@D@F@F?HLpE@`@??JAJCDAHEFG?ALQJUJg@HQJMJKHAFAJ?X?bCRH@R?R@`@DlAN~Cb@H@H?tABTAn@?`@HbGv@XDtAPH@H@??J@F@LAv@AL?^G??AOCWAM?IAUAe@AQCY??r@GBABCf@mA'
                                }],
                                'properties': null,
                                'price': null
                            }, {
                                'type': 'bike_sharing',
                                'provider': 'nextbike',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5302356,
                                        'lng': 13.4033659,
                                        'datetime': '2015-04-17T12:29:00+01:00',
                                        'name': 'Torstraße 103, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.52997834855536,
                                        'lng': 13.40134084224701,
                                        'datetime': '2015-04-17T12:31:00+01:00',
                                        'name': 'Rosenthaler Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpA?d@?X@V@z@FdD@`@@T@P??OGIEEC'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.52997834855536,
                                        'lng': 13.40134084224701,
                                        'datetime': '2015-04-17T12:31:00+01:00',
                                        'name': 'Rosenthaler Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.52997834855536,
                                        'lng': 13.40134084224701,
                                        'datetime': '2015-04-17T12:33:00+01:00',
                                        'name': 'Rosenthaler Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'setup',
                                    'description': null,
                                    'color': '#0a4abd',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/setup.svg',
                                    'polyline': null
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.52997834855536,
                                        'lng': 13.40134084224701,
                                        'datetime': '2015-04-17T12:33:00+01:00',
                                        'name': 'Rosenthaler Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.5097012820797,
                                        'lng': 13.3759671449661,
                                        'datetime': '2015-04-17T12:49:00+01:00',
                                        'name': 'Bahnhof/ Potsdamer Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'cycling',
                                    'description': null,
                                    'color': '#0a4abd',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/bike_sharing.svg',
                                    'polyline': '_wr_IqlxpABCDIFIHM??@F@L@N??\\W~BgBRYtByATQRO^[r@a@j@e@VQPMNGLGDCt@WjB]LCNEJANAL?J@H@J@HDNDLFrAh@NDb@TNHlAn@\\PNNNNdAhA??BKJ[FMLa@??DHTZFDBBPTDH~AhDDJxAfDH^??LKLEJGFAB?DAN@T@H?FADAFAfAUHELGTMTQBC@C@E??^YlB_Bj@k@zC_DPS??Rt@DLt@pCn@hCrA|EHXFXJj@Dj@?@Dx@?DBr@D`A?HDt@VfI@FJ|EPxH@N?V?NANALAHBxAN~JPdI@n@?H@L?H@f@RvFRjHFnCBbADzA@r@j@hS??PrF??PzFHRBF@D@F@F?HLpE@`@??JAJCDAHEFG?ALQJUJg@HQJMJKHAFAJ?X?bCRH@R?R@`@DlAN~Cb@H@H?tABTAn@?`@HbGv@XDtAPH@H@??H~BBr@Bt@@N?B??p@_@n@[???QAQAk@'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5097012820797,
                                        'lng': 13.3759671449661,
                                        'datetime': '2015-04-17T12:49:00+01:00',
                                        'name': 'Bahnhof/ Potsdamer Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.5097012820797,
                                        'lng': 13.3759671449661,
                                        'datetime': '2015-04-17T12:50:00+01:00',
                                        'name': 'Bahnhof/ Potsdamer Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'parking',
                                    'description': null,
                                    'color': '#0a4abd',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/parking.svg',
                                    'polyline': null
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5097012820797,
                                        'lng': 13.3759671449661,
                                        'datetime': '2015-04-17T12:50:00+01:00',
                                        'name': 'Bahnhof/ Potsdamer Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:53:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'swn_I_ospAIqB@k@??VC??AM?IAUAe@AQCY??r@GBABCf@mA'
                                }],
                                'properties': {
                                    'id': '5182',
                                    'available_bikes': 4
                                },
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 100
                                }
                            }, {
                                'type': 'bike_sharing',
                                'provider': 'callabike',
                                'segments': [{
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5302356,
                                        'lng': 13.4033659,
                                        'datetime': '2015-04-17T12:29:00+01:00',
                                        'name': 'Torstraße 103, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.529564,
                                        'lng': 13.400986,
                                        'datetime': '2015-04-17T12:32:00+01:00',
                                        'name': 'U-Bhf. Rosenthaler Platz / Torstraße',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'uvr_I{yxpA?d@?X??NANA@t@J|D@X@Z@T@T@^@b@?@'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.529564,
                                        'lng': 13.400986,
                                        'datetime': '2015-04-17T12:32:00+01:00',
                                        'name': 'U-Bhf. Rosenthaler Platz / Torstraße',
                                        'properties': null
                                    }, {
                                        'lat': 52.529564,
                                        'lng': 13.400986,
                                        'datetime': '2015-04-17T12:34:00+01:00',
                                        'name': 'U-Bhf. Rosenthaler Platz / Torstraße',
                                        'properties': null
                                    }],
                                    'travel_mode': 'setup',
                                    'description': null,
                                    'color': '#f20014',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/setup.svg',
                                    'polyline': null
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.529564,
                                        'lng': 13.400986,
                                        'datetime': '2015-04-17T12:34:00+01:00',
                                        'name': 'U-Bhf. Rosenthaler Platz / Torstraße',
                                        'properties': null
                                    }, {
                                        'lat': 52.5097927,
                                        'lng': 13.37934136,
                                        'datetime': '2015-04-17T12:49:00+01:00',
                                        'name': 'U-Bhf. Potsdamer Platz / Leipziger Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'cycling',
                                    'description': null,
                                    'color': '#f20014',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/bike_sharing.svg',
                                    'polyline': '{tr_IckxpA?AAc@A_@??~BgBRYtByATQRO^[r@a@j@e@VQPMNGLGDCt@WjB]LCNEJANAL?J@H@J@HDNDLFrAh@NDb@TNHlAn@\\PNNNNdAhA??BKJ[FMLa@??DHTZFDBBPTDH~AhDDJxAfDH^??LKLEJGFAB?DAN@T@H?FADAFAfAUHELGTMTQBC@C@E??^YlB_Bj@k@zC_DPS??Rt@DLt@pCn@hCrA|EHXFXJj@Dj@?@Dx@?DBr@D`A?HDt@VfI@FJ|EPxH@N?V?NANALAHBxAN~JPdI@n@?H@L?H@f@RvFRjHFnCBbADzA@r@j@hS??PrF??PzFHRBF@D@F@F?HLpE@`@??JAJCDAHEFG?ALQJUJg@HQJMJKHAFAJ?X?bCRH@R?R@`@DlAN~Cb@H@H?tABTAn@?`@HbGv@XDtAPH@H@??J@F@LAv@AL???@k@Ak@Cg@?W?I?I??m@FE?AACACCKMOWMOGKCEACAC?EAQAk@AQ?c@?KAk@AQ?G?G@E@GHQXo@DMBEBCBCB?BAJ?LA'
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5097927,
                                        'lng': 13.37934136,
                                        'datetime': '2015-04-17T12:49:00+01:00',
                                        'name': 'U-Bhf. Potsdamer Platz / Leipziger Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.5097927,
                                        'lng': 13.37934136,
                                        'datetime': '2015-04-17T12:50:00+01:00',
                                        'name': 'U-Bhf. Potsdamer Platz / Leipziger Platz',
                                        'properties': null
                                    }],
                                    'travel_mode': 'parking',
                                    'description': null,
                                    'color': '#f20014',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/parking.svg',
                                    'polyline': null
                                }, {
                                    'name': null,
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5097927,
                                        'lng': 13.37934136,
                                        'datetime': '2015-04-17T12:50:00+01:00',
                                        'name': 'U-Bhf. Potsdamer Platz / Leipziger Platz',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:53:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'walking',
                                    'description': null,
                                    'color': '#b1becc',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/walking.svg',
                                    'polyline': 'gyn_IqdtpARCVE^EDAD@FDv@hA@FBnA@d@D~AABGP'
                                }],
                                'properties': {
                                    'id': '1141',
                                    'available_bikes': 11
                                },
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 120
                                }
                            }, {
                                'type': 'taxi',
                                'provider': 'google',
                                'segments': [{
                                    'name': 'Taxi',
                                    'num_stops': 0,
                                    'stops': [{
                                        'lat': 52.5302356,
                                        'lng': 13.4033659,
                                        'datetime': '2015-04-17T12:29:00+01:00',
                                        'name': 'Torstraße 103, 10119 Berlin, Deutschland',
                                        'properties': null
                                    }, {
                                        'lat': 52.509071,
                                        'lng': 13.377977,
                                        'datetime': '2015-04-17T12:43:00+01:00',
                                        'name': 'Leipziger Platz 7, 10117 Berlin, Deutschland',
                                        'properties': null
                                    }],
                                    'travel_mode': 'driving',
                                    'description': null,
                                    'color': '#fec536',
                                    'icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/vehicles/taxi.svg',
                                    'polyline': 'uvr_I{yxpA?d@?X@V@z@FdD@`@@T@P@F@L@NDRFXBXDfBBVDVZ~L@Z?ZD^nAnIzA|J\\nBDXNnAD`@BXDj@NpAPpAl@~Eb@hDJv@^rCJt@TlB@VFj@??D\\@PJIDAHCfBOPAPC|@I`CSp@GN?^GRC~@KpBWx@ILARA|DUjBQZKFE@AJEpCWvAMB@DBL?@?PAD?DA`@EZCB?H?H@H?B?NAt@I`Cc@RO~AQLAtCSJDbIy@lDWnDWZSrCUhD[LAtCYRJPAxBUb@E??@j@VhKBn@Bp@H`EFhCPjGZnL\\xM@^??VE^EDAD@FDv@hA@FBnA@d@D~AABGP'
                                }],
                                'properties': {
                                    'companies': [{
                                        'name': 'Taxi Funk Berlin',
                                        'phone': '+4930443322'
                                    }, {
                                        'name': 'Quality Taxi',
                                        'phone': '+4930263000'
                                    }, {
                                        'name': 'Würfelfunk',
                                        'phone': '+4930210101'
                                    }, {
                                        'name': 'City Funk ',
                                        'phone': '+4930210202'
                                    }, {
                                        'name': 'SpeedCab Taxifunk GmbH',
                                        'phone': '+4930414040'
                                    }]
                                },
                                'price': {
                                    'currency': 'EUR',
                                    'amount': 965
                                }
                            }],
                            'provider_attributes': {
                                'vbb': {
                                    'provider_icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/providers/vbb.svg',
                                    'disclaimer': 'Our data is as live and real-time as possible.'
                                },
                                'drivenow': {
                                    'provider_icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/providers/drivenow.svg',
                                    'disclaimer': 'Our data is as live and real-time as possible.',
                                    'ios_itunes_url': 'https://itunes.apple.com/app/drivenow-carsharing/id435719709?mt=8',
                                    'ios_app_url': 'drivenow://',
                                    'android_package_name': 'com.dn.drivenow',
                                    'display_name': 'Drivenow'
                                },
                                'car2go': {
                                    'provider_icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/providers/car2go.svg',
                                    'disclaimer': 'Our data is as live and real-time as possible.',
                                    'ios_itunes_url': 'https://itunes.apple.com/app/car2go/id514921710?mt=8',
                                    'ios_app_url': 'car2go://',
                                    'android_package_name': 'com.car2go',
                                    'display_name': 'Car2go'
                                },
                                'google': {
                                    'provider_icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/providers/google.svg',
                                    'disclaimer': 'Our data is as live and real-time as possible.'
                                },
                                'nextbike': {
                                    'provider_icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/providers/nextbike.svg',
                                    'disclaimer': 'Our data is as live and real-time as possible.',
                                    'ios_itunes_url': 'https://itunes.apple.com/app/nextbike/id504288371?mt=8',
                                    'ios_app_url': 'nextbike://',
                                    'android_package_name': 'de.nextbike',
                                    'display_name': 'Nextbike'
                                },
                                'callabike': {
                                    'provider_icon_url': 'https://d3m2tfu2xpiope.cloudfront.net/providers/callabike.svg',
                                    'disclaimer': 'Our data is as live and real-time as possible.',
                                    'ios_itunes_url': 'https://itunes.apple.com/app/call-a-bike/id420360589?mt=8',
                                    'ios_app_url': 'callabike://',
                                    'android_package_name': 'de.bahn.callabike',
                                    'display_name': 'Call a Bike'
                                }
                            }

                        };
                        return [200, response, {}];
                    });
                }
            };
        }

        return {
            forRouteRequest: forRouteRequest
        };
    }

    httpStubberService.$inject = ['$httpBackend'];

    module.service('HttpStubberService', httpStubberService);

    return httpStubberService;
});