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

            Socket.on('create-report-channel:App\\Events\\CreateCrimeReportEvent', function(data) {
                console.log(data);
            });

        }

})();