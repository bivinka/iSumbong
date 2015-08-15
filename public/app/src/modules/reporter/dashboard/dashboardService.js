;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .service('DashboardService', ['$resource', '$rootScope', '$window', DashboardService]);

        function DashboardService ($resource, $rootScope, $window) {

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


                var DashboardService = {

                    stations : null,

                    getStations : function getStations() {
                        
                        var self = this;    

                        return api.getStations().$promise.then(function(response) {
                            self.stations = response.stations;
                        });
                    }
                };

                return DashboardService;
        }

})();