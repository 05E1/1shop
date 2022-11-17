// --- Thực hiện đối với sản phẩm ,Request + response  từng sản phẩm chi tiết


// //const menuData =
// app.controller('myCtrl', function($scope, $rootScope) {
//     var a = 1; //something in the scope
//     //put it in the root scope
//     $rootScope.test = "TEST";
//     console.log(a);

// });

// app.controller('myCtrl2', function($scope, $rootScope) {
// var b = a; //get var a from root scope somehow
// //use var b

// $scope.value = $rootScope.test;


// alert($scope.value);
// console(log);
// console.log(b);
// //    var b = $rootScope.test;
// //  alert(b);
// });







// app.controller('MenController', function($scope, $http) {

//     $scope.users = [
//         { name: "abc", email: "abc@gmail.com", fullname: "abc abc" },
//         { name: "def", email: "def@gmail.com", fullname: "def def" },
//         { name: "ghi", email: "ghi@gmail.com", fullname: "ghi ghi" }
//     ];




// $scope.DataProducts = [{
//         "Id": 00001,
//         "NameSP": "Hamburg Suites",
//         "Address": "An Der Alster 82",
//         "Description": "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
//         "Content": "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm",
//         "Discount": 10,
//         "Price": 299,
//         "Num": 55,
//         "size": [{
//             "NoSiz": 33,
//             "NoSiz": 34,
//             "NoSiz": 35,
//             "NoSiz": 36
//         }],
//         "color ": "vàng",
//         "Images ": [{
//             "FileName": "250x250.png ",
//         }, {
//             "FileName": "400x600.png",
//         }, {
//             "FileName": "400x600.png",
//             "widthRatio": 2,
//             "heightRatio": 2
//         }, {
//             "FileName": "1500x1500.png",
//             "widthRatio": 2,
//             "heightRatio": 2
//         }, {
//             "FileName": "Bedroom-1-2.jpg",
//         }, {
//             "FileName": "Bathroom-0.jpg",
//         }]
//     },
//     {
//         "Id": 00001,
//         "NameSP": "Hamburg Suites",
//         "Address": "An Der Alster 82",
//         "Description": "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
//         "Content": "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm",
//         "Discount": 10,
//         "Price": 299,
//         "Num": 55,
//         "size": [{
//             "NoSiz": 33,
//             "NoSiz": 34,
//             "NoSiz": 35,
//             "NoSiz": 36
//         }],
//         "color ": "vàng",
//         "Images ": [{
//             "FileName": "250x250.png ",
//         }, {
//             "FileName": "400x600.png",
//         }, {
//             "FileName": "400x600.png",
//             "widthRatio": 2,
//             "heightRatio": 2
//         }, {
//             "FileName": "1500x1500.png",
//             "widthRatio": 2,
//             "heightRatio": 2
//         }, {
//             "FileName": "Bedroom-1-2.jpg",
//         }, {
//             "FileName": "Bathroom-0.jpg",
//         }]
//     }, {
//         "Id": 0003,
//         "NameSP": "Sản phẩm quần âu ",
//         "Address": "An Der Alster 82",
//         "Description": "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
//         "Content": "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm",
//         "Discount": 10,
//         "Price": 5000000,
//         "Num": 55,
//         "size": [{
//             "NoSiz": 33,
//             "NoSiz": 34,
//             "NoSiz": 35,
//             "NoSiz": 36
//         }],
//         "color ": "vàng",
//         "Images ": [{
//             "FileName": "250x250.png ",
//         }, {
//             "FileName": "400x600.png",
//         }, {
//             "FileName": "400x600.png",
//             "widthRatio": 2,
//             "heightRatio": 2
//         }, {
//             "FileName": "1500x1500.png",
//             "widthRatio": 2,
//             "heightRatio": 2
//         }, {
//             "FileName": "Bedroom-1-2.jpg",
//         }, {
//             "FileName": "Bathroom-0.jpg",
//         }]
//     }

// ];




// $http.get("datapro.json").success(function(response) {
//     $scope.DataProduct = response;
//     // $scope.datas = response;
// });
// $scope.DataProduct = $scope.datas;


// });


/*
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


*/