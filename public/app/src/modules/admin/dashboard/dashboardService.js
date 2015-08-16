;(function() {

    'use strict';

    angular
        .module('module.admin')
        .service('AdminDashboardService', ['$resource', '$rootScope', '$window', AdminDashboardService]);

        function AdminDashboardService ($resource, $rootScope, $window) {

                var api = $resource (
                    '',
                    {},
                    {
                        getStations : {
                            url : $rootScope.config.server_url + 'admin/stations',
                            method : 'GET'
                        }
                    }
                );


                var AdminDashboardService = {

                    stations : null,

                    getStations : function getStations() {
                        
                        var self = this;    

                        return api.getStations().$promise.then(function(response) {
                            self.stations = response.stations;
                        });
                    }
                };

                return AdminDashboardService;
        }

})();