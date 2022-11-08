var oneApp = angular.module('oneApp', ['ngRoute', 'ngResource']);

oneApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'homeController'
    })

    .when('/Men', {
        templateUrl: 'MenProducts.html',
        controller: 'MenController'
    })
});


oneApp.controller('mainController', ['$scope', function($scope) {
    $scope.message = 'Hello from MenController';
}]);

oneApp.controller('MenController', ['$scope', function($scope) {
    $scope.message = 'Hello from MenController';
}]);
oneApp.controller('GirlController', ['$scope', function($scope) {
    $scope.message = 'Hello from MenController';
}]);
oneApp.controller('ContactController', ['$scope', function($scope) {

}]);
oneApp.controller('CartController', ['$scope', function($scope) {

}]);