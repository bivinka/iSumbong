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
                    }
                );


                var DashboardService = {

                };

                return DashboardService;
        }

})();