;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .service('ReportService', ['$resource', '$rootScope', '$window', ReportService]);

        function ReportService ($resource, $rootScope, $window) {

                var api = $resource (
                    '',
                    {},
                    {
                        getStations : {
                            url : $rootScope.config.server_url + 'reporter/stations',
                            method : 'POST'
                        }
                    }
                );


                var ReportService = {

                    stations : null,

                    getStations : function getStations(params) {
                        
                        var self = this;    

                        return api.getStations(params).$promise.then(function(response) {
                            self.stations = response.stations;
                        });
                    }
                };

                return ReportService;
        }

})();