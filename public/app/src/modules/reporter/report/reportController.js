;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .controller('ReportController', ['$auth', '$http', '$location', '$window', '$rootScope', 'Sidebar', ReportController]);

        function ReportController($auth, $http, $location, $window, $rootScope, Sidebar) {

            var vm = this;
            
            vm.Sidebar = Sidebar;


            

        }

})();