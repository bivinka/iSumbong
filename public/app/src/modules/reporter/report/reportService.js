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
                            url : $rootScope.config.server_url + 'stations',
                            method : 'POST'
                        },

                        getTypes : {
                            url : $rootScope.config.server_url + 'categories'
                        }
                    }
                );


                var ReportService = {

                    stations : null,
                    categories : null,

                    getStations : function getStations(params) {
                        
                        var self = this;    

                        return api.getStations(params).$promise.then(function(response) {
                            self.stations = response.stations;
                        });
                    },

                    getTypes : function() {
                        var self = this;    
                        return api.getTypes().$promise.then(function(response) {
                            self.categories = response.categories;
                        })
                    }

                };

                return ReportService;
        }

})();