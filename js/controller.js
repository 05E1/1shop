angular.module('app.controllers', ['app.services'])
    .controller('MenController', function($scope, Friend) {
        Friend.get().then(function(msg) {
            $scope.msg = msg;
        });
    });
app.controller('SomeController', function($scope, HttpService) {

    // get data from url and assign to scope for rendering 
    HttpService.personList().then(res) {
        $scope.data = res.data;
    }

});

/*
app.controller('MenController', function($scope, $http) {

    $http.get("datapro.json").success(function(response) {
        $scope.DataProduct = response;
        // $scope.datas = response;
    });
    // $scope.DataProduct = $scope.datas;
});



app.controller('GirlController', function($scope, $http) {

    $http.get("datapro.json").success(function(response1) {
        $scope.ProGirl = response1;
    });
    $scope.DataPrGirl = $scope.ProGirl;
});


app.controller('NewController', function($scope, $http) {

    $http.get("datapro.json").success(function(response2) { $scope.datasNew = response2; });
    $scope.NewProducts = $scope.datasNew;
});
app.controller('NewContact', function($scope, $http) {
    $scope.datasContact = new Array;
    $http.get("datapro.json").then(function(response3) { $scope.contact = response3; });
    $scope.datasContact = $scope.contact;
});
*/