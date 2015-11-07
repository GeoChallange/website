(function () {
    'use strict';

    angular.module('app')
        .service('Dialog', function ($uibModal) {
            var _self = this;

            _self.alert = function (content) {
                return $uibModal.open({
                    templateUrl: 'templates/alert.dialog.view.html',
                    controller: 'AlertDialogController',
                    size: 'md',
                    resolve: {
                        items: {
                            content: content
                        }
                    }
                });
            }
        })
        .controller('AlertDialogController', function ($scope, $modalInstance, items) {
            $scope.content = items.content;

            $scope.ok = function () {
                $modalInstance.close();
            }
        });
})();