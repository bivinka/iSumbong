;(function() {

    'use strict';

    angular
        .module('module.reporter')
        .controller('ReportController', [
            '$auth', 
            '$http', 
            '$location', 
            '$window', 
            '$rootScope', 
            'Sidebar', 
            'ReportService', 
            'LxNotificationService', 
            'Upload', 
            'Socket',
            ReportController]);

        function ReportController(
            $auth, 
            $http, 
            $location, 
            $window, 
            $rootScope, 
            Sidebar, 
            ReportService, 
            LxNotificationService, 
            Upload,
            Socket
        ) {

            var vm = this;
            
            vm.Sidebar = Sidebar;

            vm.stations = [];
            var latitude = null;
            var longitude = null;

            getLocation();

            function init (position) {
                var params = {
                    'latitude': position.coords.latitude,
                    'longitude': position.coords.longitude,
                }

                ReportService.getStations(params).then(function() {
                    vm.stations = ReportService.stations;
                }); 
            }

            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(uploadFile);
                    navigator.geolocation.getCurrentPosition(init);
                } else {
                    return "Geolocation is not supported by this browser.";
                }
            }

            vm.sendReport = function () {
                // console.log(getLocation());
                getLocation();

                if (latitude !== null && longitude !== null) {
                    uploadFile();
                } else {
                    uploadFile();
                }

            }

            function uploadFile (position) {

                Upload.upload({
                    url     : $rootScope.config.application_server +  'api/resume/upload',
                    fields  : 
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        // user_id should be changed
                        user_id: 1,
                        station_id: 1,
                        description: vm.description
                    },
                    file    : vm.file
                }).progress(function (evt) {

                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    
                }).success(function (data, status, headers, config) {
                    
                    console.log(data);
                    LxNotificationService.success(data.success);

                }).error(function (data, status, headers, config) {
                    
                    LxNotificationService.error(data.error);

                });
            }


        }

})();