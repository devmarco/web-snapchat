'use strict';

/**
 * DIRECTIVE FILE UPLOAD
 */
angular.module('snapApp')
    .directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('change', function(event) {
                    var files = event.target.files;
                    for (var i = 0; i < files.length; i++) {
                        //emit event upward
                        scope.$emit("fileSelected", { file: files[i] });
                    };
                });
            }
        }
    }])
