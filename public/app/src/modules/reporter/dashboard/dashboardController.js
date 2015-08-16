;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .controller('DashboardController', [
            '$auth', 
            '$http', 
            '$location', 
            '$window', 
            '$rootScope', 
            'Sidebar', 
            'DashboardService', 
            'Upload',
            'Socket',
            DashboardController]);

        function DashboardController(
            $auth, 
            $http, 
            $location, 
            $window, 
            $rootScope, 
            Sidebar, 
            DashboardService, 
            Upload,
            Socket
        ) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

            vm.stations = [];

            DashboardService.getStations().then(function() {
                vm.stations = DashboardService.stations;
            }); 

        }

})();