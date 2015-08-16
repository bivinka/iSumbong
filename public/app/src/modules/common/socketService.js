;(function() {

    'use strict';
    angular
        .module('module.common')
        .factory('Socket', ['$rootScope', Socket]);

    function Socket($rootScope) {
        
        var socket = io('http://core.isumbong.com:3000');

        return {

            on : function(event, callback) {
                    socket.on(event, function(response){
                        console.log(response);
                        // var args = arguments;
                        // $rootScope.$apply(function() {
                        //     callback.apply(socke, args);
                        // })
                    }
                );
            }

        }

    }
})();