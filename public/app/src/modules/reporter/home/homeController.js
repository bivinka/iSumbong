;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .controller('HomeController', ['$auth', '$http', '$location', '$window', '$rootScope', 'Sidebar', 'HomeService', 'Upload', HomeController]);

        function HomeController($auth, $http, $location, $window, $rootScope, Sidebar, HomeService, Upload) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

            vm.stations = [];

            // HomeService.getStations().then(function() {
            //     vm.stations = HomeService.stations;
            // }); 


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