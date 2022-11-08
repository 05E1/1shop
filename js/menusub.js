var app = angular.module('myApp', []);

app.controller('NavCtrl', function($scope, $http) {

    $http.get('data/menu.json').success(function(data) {
        $scope.links = data;
    });

});