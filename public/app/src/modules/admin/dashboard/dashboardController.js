;(function() {

    'use strict';

    angular
        .module('module.admin')
        .controller('DashboardController', [
            '$auth', 
            '$http', 
            '$location', 
            '$window', 
            '$rootScope', 
            'Sidebar', 
            'AdminDashboardService', 
            'Socket', 
            DashboardController]);

        function DashboardController(
            $auth, 
            $http, 
            $location, 
            $window, 
            $rootScope, 
            Sidebar, 
            AdminDashboardService,
            Socket
        ) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

            vm.stations = [];
            vm.reports = null;

            AdminDashboardService.getReports(1).then(function(response) {
                vm.reports = AdminDashboardService.reports;
            });

            Socket.on('create-report-channel:App\\Events\\CreateCrimeReportEvent', function(data) {
                    
                AdminDashboardService.getReports(data.data).then(function(response) {
                    vm.reports = AdminDashboardService.reports;
                });

            });

        }

})();