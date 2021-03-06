;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .service('HomeService', ['$resource', '$rootScope', '$window', HomeService]);

        function HomeService ($resource, $rootScope, $window) {

                var api = $resource (
                    '',
                    {},
                    {
                        getStations : {
                            url : $rootScope.config.server_url + 'reporter/stations',
                            method : 'GET'
                        }
                    }
                );


                var HomeService = {

                    stations : null,

                    getStations : function getStations() {
                        
                        var self = this;    

                        return api.getStations().$promise.then(function(response) {
                            self.stations = response.stations;
                        });
                    }
                };

                return HomeService;
        }

})();