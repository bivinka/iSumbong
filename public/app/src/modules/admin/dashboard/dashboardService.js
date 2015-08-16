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
                        },

                        getReports : {
                            url : $rootScope.config.server_url + 'admin/reports/:id',
                            method : 'GET',
                            params : {id : '@id'}
                        }
                    }
                );


                var AdminDashboardService = {

                    stations : null,
                    reports : null,

                    getStations : function getStations() {
                        
                        var self = this;    

                        return api.getStations().$promise.then(function(response) {
                            self.stations = response.stations;
                        });
                    },

                    getReports : function getReports(id) {
                        var self = this;    

                        return api.getReports({id : id}).$promise.then(function(response) {
                            self.reports = response.reports;
                        });
                    }
                };

                return AdminDashboardService;
        }

})();