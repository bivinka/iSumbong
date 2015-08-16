;(function() {

    'use strict';

    angular
        .module('module.admin')
        .controller('ReportViewController', [
            '$auth', 
            '$http', 
            '$location', 
            '$window', 
            '$rootScope', 
            'Sidebar', 
            'AdminDashboardService'
            ReportViewController]);

        function ReportViewController(
            $auth, 
            $http, 
            $location, 
            $window, 
            $rootScope, 
            Sidebar, 
            AdminDashboardService
        ) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

        }

})();