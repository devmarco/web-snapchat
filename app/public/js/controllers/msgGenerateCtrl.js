'use strict';

/**
 * Controller of the viewsApp
 */
angular.module('snapApp')
	.controller('GenerateCtrl', ['$scope', '$resource', 'messageService', '$location', 'fileUpload', function ($scope, $resource, messageService, $location, fileUpload) {

		//an array of files selected
    $scope.files = [];

		$scope.$on("fileSelected", function (event, args) {
        $scope.$apply(function () {
            //add the file object to the scope's files collection
            $scope.files.push(args.file);
        });

        fileUpload.sendFiles($scope.files);
    });




		//var file = $scope.myFile;
		//var uploadUrl = '/uploads/';
		//fileUpload.uploadFileToUrl(file, uploadUrl);


		$scope.generateUrl = function() {
				var message = angular.element(document.querySelector('.user-message')).val();
				var timer = angular.element(document.querySelector('.time')).text();

				if (timer !== "") {
					messageService.saveMessage(message, timer).then(function(message) {
						if (message.status === "ok") {
							$scope.url = $location.$$absUrl+'message/'+message.id;
							$scope.ok = true;
						};
					});
				} else {
					console.log('Err: Por favor escolha um tempo');
				}
		};
	}]);
