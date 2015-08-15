;(function() {

    'use strict';

    angular
        .module('module.common')
        .directive('logout', ['LxNotificationService', logout])
        .directive('pagination', [pagination])
        .directive('appFilereader', ['$q', fileReader]);

    function fileReader ($q)  {
        var slice = Array.prototype.slice;

        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {

                    if (!ngModel) return;

                    ngModel.$render = function() {};

                    element.bind('change', function(e) {

                        var element = e.target;

                        $q.all(slice.call(element.files, 0).map(readFile))
                            .then(function(values) {
                                if (element.multiple) ngModel.$setViewValue(values);
                                else ngModel.$setViewValue(values.length ? values[0] : null);
                            });

                        function readFile(file) {
                            var deferred = $q.defer();

                            var reader = new FileReader();
                            reader.onload = function(e) {
                                deferred.resolve(e.target.result);
                            };
                            reader.onerror = function(e) {
                                deferred.reject(e);
                            };
                            reader.readAsDataURL(file);

                            return deferred.promise;
                        }

                    }); 
                } 
        }; 
    }


    function pagination () {
        return {
            restrict : 'A',
            link : function (scope, element, attrs) {

                // var parent = angular.element(element);
                
                var children = element.children();

                children.addClass('test')
            }
        }
    }

    function logout (LxNotificationService) {
        
        return {
            restrict : 'A',
            // controller : 'LoginController',
            // link : function (scope, element, attrs, controller) {

            //     element.bind('click', function() {
            //         LxNotificationService
            //             .confirm(
            //                 'Logout', 
            //                 'Do you want to procceed to logout?', { cancel:'No', ok:'Yes' }, function(answer)
            //             {
            //                 if (answer) {
            //                     controller.logout();
            //                 }
            //         });
            //     });
            // }
        }

    }


})();