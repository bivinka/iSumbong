;(function() {

    'use strict';
    angular
        .module('module.common')
        .service('Sidebar', Sidebar)
        .factory('AuthenticationService', ['$rootScope', '$window', '$location', '$route', '$resource', AuthenticationService]);

    function Sidebar() {

        var sidebarIsShown = false;

        function toggleSidebar()
        {
            sidebarIsShown = !sidebarIsShown;
        }

        return {
            isSidebarShown: function()
            {
                return sidebarIsShown;
            },
            toggleSidebar: toggleSidebar
        };
    }

    function AuthenticationService($rootScope, $window, $location, $route, $resource) {
        
        this.resources = $resource(
            '',
            {},
            {
                isLoggedIn : {
                    url     : $rootScope.config.application_server + 'api/authenticate/user',
                    method  : 'GET'
                }
            }
        );

        this.isLoggedIn = function(params) {
            return this.resources.isLoggedIn(params).$promise;
        }

        this.checkAuth = function() {
            
            this.isLoggedIn().then(
                function (response) {

                    var module = $route.current.module;

                    var user = $window.localStorage.user_type;

                    if (response.user.client_id == module) {

                        if (typeof(user) !== 'undefined') {
                            $rootScope.$broadcast('loggedIn');

                            if($location.path() == '/login') {
                                $location.path('/' + user + '/dashboard');
                            } 

                            if($location.path() == '/') {
                                $location.path('/' + user + '/dashboard');
                            }

                            if($location.path() == '/register') {
                                $location.path('/' + user + '/dashboard');
                            }
                        } else {
                            $location.path('/login');
                        }

                    } else {
                        $location.path('/' + user + '/dashboard');
                    }



                },

                function (error) {

                    $location.path('/login');
                }
            );
        }

        return this;
    }
})();