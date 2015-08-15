;(function() {

    'use strict';
    angular
        .module('module.common')
        .service('Filters', ['$resource', '$rootScope', Filters]);

        function Filters($resource, $rootScope) {

            var api = $resource ('',
                {},
                {
                    getFilters : {
                        url : $rootScope.config.application_server + 'api/filters',
                        method: 'GET',
                    },
                }
            );

            var Filters = {

                getFilters : function(filters) {
                    return api.getFilters(filters).$promise;
                }
            }

            return Filters;

        }
})();