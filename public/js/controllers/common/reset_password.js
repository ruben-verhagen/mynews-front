angular.module('MyNewsApp.Controllers')
.controller('PasswordResetController', ['$scope', '$rootScope',
function PasswordResetController($scope, $rootScope) {

    $scope.data = {
        password: '',
        password2: ''
    }

    $scope.submit = function() {
        // ~~
    }

}]);