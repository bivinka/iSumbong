;(function() {

    'use strict';

    angular
        .module('module.admin')
        .controller('DashboardController', ['$auth', '$http', '$location', '$window', '$rootScope', 'Sidebar', 'DashboardService', DashboardController]);

        function DashboardController($auth, $http, $location, $window, $rootScope, Sidebar, DashboardService) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

        }

})();