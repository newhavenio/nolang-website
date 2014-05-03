require('../../bower_components/angular/angular');
require('../../bower_components/angular-touch/angular-touch');

angular.module('noLang', ['ngTouch'])

.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}])

.controller('MenuCtrl', [
    '$scope',
    '$location',
    '$anchorScroll',

    function($scope, $location, $anchorScroll) {
        $scope.isOpen = false;
        $scope.toggleMenu = function() {
            if($scope.isOpen) {
              $scope.isOpen = false;
            }
            else {
              $scope.isOpen = true;
            }
        }
        $scope.scrollTo = function(id) {
            $scope.isOpen = false;
            $location.hash(id);
            $anchorScroll();
        }
    }
]);
