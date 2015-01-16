'use strict';

/**
 * Controller of the viewsApp
 */
angular.module('snapApp')
    .service('fileUpload', ['$http', function ($http) {
        return {
            sendFiles: function(files) {
                $http({
                    method: 'POST',
                    url: "/uploads",

                    headers: { 'Content-Type': undefined },

                    transformRequest: function (data) {
                        var formData = new FormData();

                        formData.append("model", angular.toJson(data.model));

                        for (var i = 0; i < data.files; i++) {
                            formData.append("file" + i, data.files[i]);
                        }
                        return formData;
                    },
                    //Create an object that contains the model and files which will be transformed
                    // in the above transformRequest method
                    data: { files: files }
                }).
                success(function (data, status, headers, config) {
                    alert("success!");
                }).
                error(function (data, status, headers, config) {
                    alert("failed!");
                });
            }
        }
    }]);
