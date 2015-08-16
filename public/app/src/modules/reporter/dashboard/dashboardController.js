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

            // Upload.upload({
            //     url     : $rootScope.config.application_server +  'api/resume/upload',
            //     fields  : 
            //     {
            //         // 'user'      : $window.localStorage.user,
            //         // 'title'     : vm.resume.title,
            //         // 'isDefault' : (vm.resume.isDefault !== null) ? 'y' : 'n'
            //     },
            //     file    : vm.file
            // }).progress(function (evt) {

            //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                
            // }).success(function (data, status, headers, config) {
                
            //     vm.resume.title = null;
            //     vm.resume.isDefault = null;
            //     vm.resume.file = null;
            //     LxNotificationService.success(data.success);
            //     LxDialogService.close('addResumeDialog');

            //     ResumeService
            //         .getResumeList()
            //         .then(function() {
            //             vm.resumes = ResumeService.resumes;
            //         })


            // }).error(function (data, status, headers, config) {
                
            //     LxNotificationService.error(data.error);

            // });

        }

})();