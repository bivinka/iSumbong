;(function() {

    'use strict';

    angular
        .module('module.common')
        .filter("asDate", function () {
    		return function (input) {
        		return new Date(input);
    		}
		})
})();