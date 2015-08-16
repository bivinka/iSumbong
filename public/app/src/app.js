;(function(){

    'use strict';   

    angular
        .module('application', ['ngRoute', 'ngResource', 'lumx', 'satellizer', 
                'ngFileUpload',
            'module.common', 
            'module.reporter', 
            'module.admin',
            'module.login'
        ])
        .controller('ApplicationController', ['$rootScope', '$location', '$window', ApplicationController])
        .run(['$rootScope', '$window', '$route', '$location', run])
        .factory('httpInterceptor', ['$q', '$location', '$window', '$rootScope', httpInterceptor])
        .config(['$routeProvider', '$httpProvider', config]);


    function ApplicationController(){

    }   


    function run($rootScope, $window, $route, $location) {
                        
        $rootScope.config = JSON.parse($window.localStorage.ngConf);

        $window.localStorage.removeItem('ngConf');
    };

    function config($routeProvider, $httpProvider) {

    
    $routeProvider

        .when('/', {
            redirectTo: '/login'
        });

        $httpProvider.interceptors.push('httpInterceptor');

    };


    function httpInterceptor ($q, $location, $window, $rootScope) {
        return {
            responseError : function(response) {
                
                var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid', 'invalid_credentials', 'cannot_create_token'];

                angular.forEach(rejectionReasons, function (value, key) {
                    if (response.data.error === value) {
                        localStorage.removeItem('user');
                        localStorage.removeItem('satellizer_token');
                    }
                });

                return $q.reject(response);

            }
        }
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