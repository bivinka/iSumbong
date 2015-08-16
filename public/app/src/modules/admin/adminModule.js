;(function() {

    'use strict';

    angular
        .module('module.admin', ['ngRoute', 'module.common'])
        .config(['$routeProvider', config]);

        function config ($routeProvider) {

            // var authenticate = ['AuthenticationService', function(AuthenticationService) {
            //     return AuthenticationService.checkAuth();
            // }];


           $routeProvider
                .when('/admin/dashboard', {
                    templateUrl     : 'src/modules/admin/dashboard/dashboardView.html',
                    controller      : 'DashboardController',
                    controllerAs    : 'vm'
                });

        }

})();