;(function(){

    'use strict';   

    angular
        .module('application', ['ngRoute', 'ngResource', 'lumx', 'satellizer', 'module.common', 'module.reporter'])
        .controller('ApplicationController', ['$rootScope', '$location', '$window', ApplicationController])
        .run(['$rootScope', '$window', '$route', '$location', run]);


    function ApplicationController(){

    }   


    function run($rootScope, $window, $route, $location) {
                        
        $rootScope.config = JSON.parse($window.localStorage.ngConf);

        $window.localStorage.removeItem('ngConf');
    };


    angular.element(document).ready(function () {
        $.getJSON('/config/config.json',
            function (config) {
                localStorage.ngConf = JSON.stringify(config);
                angular.bootstrap(document, ['application']);
            }
        ).error(function () {
            console.log("Configuration File is Missing.")
        });
    });

})();