;(function() {

	'use strict';

	angular
		.module('module.login')
		.controller('LoginController', ['$auth', '$http', '$location', '$window', '$rootScope', 'LxNotificationService', LoginController]);

		function LoginController($auth, $http, $location, $window, $rootScope, LxNotificationService) {
			
			var vm = this;
	        
	        vm.showMessage = false;

		    vm.logout = function() {
	            $auth.logout().then(function() {
             		$rootScope.$broadcast('loggedOut');
                    $location.path('/login');
        		});
	        }

            vm.authenticate = function(provider) {
  				$auth.authenticate(provider);
			};

	        vm.login = function() {

	        	vm.loading = true;

	            var credentials = {
	                username  : vm.username,
	                password  : vm.password
	            }
	            	
	            $auth.login(credentials).then(function (data) {
					
					return $http.get($rootScope.config.server_url + 'api/authenticate/user');

	            }, function (error) {

	            	LxNotificationService.error(error.data.error);

	            }).then(function(response) {

	            	if (typeof response !== 'undefined') {
	            		$window.localStorage.user = response.data.user.id;
	            		
	            		$window.localStorage.user_type = response.data.user.client_id;

	            		$location.path('/' + response.data.user.client_id + '/dashboard');
	            	}

	            });
	        }

		}

})();