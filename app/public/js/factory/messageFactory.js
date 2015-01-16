'use strict';

/**
 * Controller of the viewsApp
 */
angular.module('snapApp')
	.service('messageFactory', ['$resource', function ($resource) {
		return $resource('/api/messages/:message_id');
	}]);
