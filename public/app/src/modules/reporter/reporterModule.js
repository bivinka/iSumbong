;(function() {

    'use strict';

    angular
        .module('module.reporter', ['ngRoute', 'module.common'])
        .config(['$routeProvider', config]);

        function config ($routeProvider) {

            // var authenticate = ['AuthenticationService', function(AuthenticationService) {
            //     return AuthenticationService.checkAuth();
            // }];


           $routeProvider
                .when('/reporter/dashboard', {
                    templateUrl     : 'src/modules/reporter/dashboard/dashboardView.html',
                    controller      : 'DashboardController',
                    controllerAs    : 'vm'
                })
                .when('/reporter/report', {
                    templateUrl     : 'src/modules/reporter/report/reportView.html',
                    controller      : 'ReportController',
                    controllerAs    : 'vm'
                });

        }

})();