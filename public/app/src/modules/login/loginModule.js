;(function() {

    'use strict';

    angular
        .module('module.login', ['ngRoute', 'satellizer'])
        .config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {

            $authProvider.loginUrl = 'http://core.isumbong.com/api/authenticate';

            $authProvider.facebook({
              clientId: '624059410963642'
            });

            $authProvider.google({
                url: 'http://core.isumbong.com/auth/google',
                // authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
              clientId: '1081017298761-8aur8iq1famfv78a7fe7lebv0hj7f8ca.apps.googleusercontent.com', 
              // scope: 'email',s
              // redirectUri : 'http://client.isumbong.com/#/reporter/dashboard',
            });

            var authenticate = ['AuthenticationService', function(AuthenticationService) {
                return AuthenticationService.checkAuth();
            }];

           $routeProvider
                .when('/login', {
                    templateUrl     : 'src/modules/login/login/loginView.html',
                    controller      : 'LoginController',
                    controllerAs    : 'vm',
                    resolve : {
                        checkAuth : authenticate
                    }
                });

        }
    ]);

})();