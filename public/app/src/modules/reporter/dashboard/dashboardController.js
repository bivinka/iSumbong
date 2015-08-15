;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .controller('DashboardController', ['$auth', '$http', '$location', '$window', '$rootScope', 'Sidebar', 'DashboardService', DashboardController]);

        function DashboardController($auth, $http, $location, $window, $rootScope, Sidebar, DashboardService) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

            vm.stations = [];

            DashboardService.getStations().then(function() {
                vm.stations = DashboardService.stations;
            });


            console.log(vm.stations);



        }

})();