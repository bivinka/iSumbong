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
                


            vm.types = ReportService.categories;
            vm.Sidebar = Sidebar;

            vm.stations = [];
            var latitude = null;
            var longitude = null;
            var isUpload = false;

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
                    
                    if (isUpload) {
                        navigator.geolocation.getCurrentPosition(uploadFile);
                    }

                    navigator.geolocation.getCurrentPosition(init);
                } else {
                    return "Geolocation is not supported by this browser.";
                }
            }

            vm.sendReport = function () {
                isUpload = true;
                getLocation();
            }

            function uploadFile (position) {

                Upload.upload({
                    url     : $rootScope.config.server_url +  'reporter/report',
                    fields  : 
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        user_id: 1,
                        station_id: 1,
                        crime_id : vm.selected_type.id,
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