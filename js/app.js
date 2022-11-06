var app = angular.module('myapp', ['ngRoute'])
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.htm",
            controller: "homeController"
        })
        .when("/Newsp", {
            templateUrl: "NewProducts.htm",
            controller: 'NewController'
        })
        .when("/Men", {
            templateUrl: "MenProducts.htm",
            controller: "MenController"
        })
        .when("/Girl", {
            templateUrl: "GirlProducts.htm",
            controller: "GirlController"
        })
        .when("/Contact", {
            templateUrl: "Contact.htm",
            controller: "ContactController"
        })

})

//const menuData =

app.controller('main_controller', function($scope) {
    angular.element(document).ready(function() {
        //some Ajax request
    })
    $scope.IsVisible = false;

    $scope.ShowHide = function() {
            $scope.IsVisible = $scope.IsVisible = true;
        }
        // ---- Menu ITEM Cấu trúc menu phân cấp 

    // {
    //     "id": "1",
    //     "Url": "/",
    //     "Name": "Top Sale",
    //     "icon": "bi bi-shop",
    //     "Items ": [{
    //         "id": "1.1",
    //         "Name": "Quần âu",
    //         "Active": 1,
    //         "icon ": '1.png',
    //         "Url": "/Sub1_1"
    //     }, {
    //         "id": "1.2",
    //         "Name": 'Áo Polo Nam ',
    //         "Active": 1,
    //         "icon": '2.png',
    //         "Url": "/Sub1_2"
    //     }]
    // },
    $scope.MenuItem = [{
            "id": "2",
            "Url": "NewSp",
            "Name": "New Products",
            "icon": "bi bi-patch-plus"
        }, {
            "id": "3",
            "Url": "Girl",
            "Name": "Girl's products",
            "icon": "fa fa-female",
            "Items ": [{
                "id": "3.1",
                "name": "Quần nữ",
                "Active": 1,
                "icon ": '1Nu.png',
                "Url": "/Sub3_1"
            }, {
                "id": "3.2",
                "Name": 'Áo Polo Nam ',
                "Active": 1,
                "icon": '2Nu.png',
                "Url": "/Sub3_2"
            }]
        }, {
            "id": "4",
            "Url": "Men",
            "Name": "Men's products",
            "icon": "fa fa-male",
            "Items ": [{
                "id": "4.1",
                "Name": "Quần nam",
                "Active": 1,
                "icon ": '1Nam.png',
                "Url": "/Sub4_1"
            }, {
                "id": "4.2",
                "Name": 'Áo Polo Nữ ',
                "Active": 1,
                "icon": '4.png',
                "Url": "/Sub4_2"
            }]
        },

        {
            "id": "5",
            "Url": "Contact",
            "Name": "Contact",
            "icon": "fa fa-users"
        }
    ];



    $scope.DataProducts = [{
            "Id": 00001,
            "NameSP": "Hamburg Suites",
            "Address": "An Der Alster 82",
            "Description": "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            "Content": "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm",
            "Discount": 10,
            "Price": 299,
            "Num": 55,
            "size": [{
                "NoSiz": 33,
                "NoSiz": 34,
                "NoSiz": 35,
                "NoSiz": 36
            }],
            "color ": "vàng",
            "Images ": [{
                "FileName": "250x250.png ",
            }, {
                "FileName": "400x600.png",
            }, {
                "FileName": "400x600.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                "FileName": "1500x1500.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                "FileName": "Bedroom-1-2.jpg",
            }, {
                "FileName": "Bathroom-0.jpg",
            }]
        },
        {
            "Id": 00001,
            "NameSP": "Hamburg Suites",
            "Address": "An Der Alster 82",
            "Description": "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            "Content": "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm",
            "Discount": 10,
            "Price": 299,
            "Num": 55,
            "size": [{
                "NoSiz": 33,
                "NoSiz": 34,
                "NoSiz": 35,
                "NoSiz": 36
            }],
            "color ": "vàng",
            "Images ": [{
                "FileName": "250x250.png ",
            }, {
                "FileName": "400x600.png",
            }, {
                "FileName": "400x600.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                "FileName": "1500x1500.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                "FileName": "Bedroom-1-2.jpg",
            }, {
                "FileName": "Bathroom-0.jpg",
            }]
        }

    ];
    // -----------------------------Thực hiện show meunu con------------
    // const showSubmenuModes = [{
    //     name: 'onHover',
    //     delay: { show: 0, hide: 500 },
    // }, {
    //     name: 'onClick',
    //     delay: { show: 0, hide: 300 },
    // }];
    // $scope.showFirstSubmenuMode = showSubmenuModes[1];
    // $scope.orientation = 'horizontal';
    // $scope.closeOnMouseLeave = false;




    // $scope.read_input = function() {
    //     console.log($scope.input_value)
    // }
});
// --- Thực hiện đối với sản phẩm ,Request + response  từng sản phẩm chi tiết




// app.controller('MenController', function($scope, $http) {
//     $scope.datas = new Array;
//     $http.get("datapro.json").then(function(response) {
//         $scope.datas = JSON.parse(response);
//     });
//     $scope.DataProduct = $scope.datas;
// });



/*
app.controller('homeController', function($scope, $http) {
    $scope.datas = new Array;
    $http.get("DataMenu.json").then(function(data) {
        $scope.datas = angular.fromJson(data);
    });
    $scope.listmenu = $scope.datas;
});
  
app.controller('homeController',
        function($scope, $http) {


            /*
                          var request = {
                              method: 'get',
                              url: 'http://127.0.0.1:3000/Data/DataMenu.json',
                              dataType: 'json',
                              contentType: "application/json"
                          };

                          $scope.arrBirds = new Array;

                          $http(request)
                              .success(function(jsonData) {
                                  $scope.arrBirds = jsonData;
                                  $scope.listmenu = $scope.arrBirds;
                              })
                              .error(function() {

                              }); 
                });



            /*
            const MainApp = angular.module('MainApp', ['dx']);

            MainApp.controller('DemoController', ($scope) => {
                const showSubmenuModes = [{
                    name: 'onHover',
                    delay: { show: 0, hide: 500 },
                }, {
                    name: 'onClick',
                    delay: { show: 0, hide: 300 },
                }];

                $scope.showFirstSubmenuMode = showSubmenuModes[1];
                $scope.orientation = 'horizontal';
                $scope.closeOnMouseLeave = false;

                $scope.productName = '';
                $scope.productPrice = '';
                $scope.productImage = '';

                $scope.menuOptions = {
                    dataSource: menuData,
                    displayExpr: 'name',
                    onItemClick(data) {
                        const item = data.itemData;
                        if (item.price) {
                            $scope.productName = item.name;
                            $scope.productPrice = `$${item.price}`;
                            $scope.productImage = item.icon;
                        }
                    },
                    bindingOptions: {
                        showFirstSubmenuMode: 'showFirstSubmenuMode',
                        orientation: 'orientation',
                        hideSubmenuOnMouseLeave: 'closeOnMouseLeave',
                    },
                };

                $scope.submenuModeOptions = {
                    items: showSubmenuModes,
                    displayExpr: 'name',
                    bindingOptions: {
                        value: 'showFirstSubmenuMode',
                    },
                };

                $scope.orientationOptions = {
                    items: ['horizontal', 'vertical'],
                    bindingOptions: {
                        value: 'orientation',
                    },
                };

                $scope.mouseLeaveOptions = {
                    text: 'Hide Submenu on Mouse Leave',
                    bindingOptions: {
                        value: 'closeOnMouseLeave',
                    },
                };
            });


            const menuData = [{
                id: '1',
                name: 'Video Players',
                items: [{
                    id: '1_1',
                    name: 'HD Video Player',
                    price: 220,
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1.png',
                }, {
                    id: '1_2',
                    name: 'SuperHD Video Player',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/2.png',
                    price: 270,
                }],
            }, {
                id: '2',
                name: 'Televisions',
                items: [{
                    id: '2_1',
                    name: 'SuperLCD 42',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/7.png',
                    price: 1200,
                }, {
                    id: '2_2',
                    name: 'SuperLED 42',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/5.png',
                    price: 1450,
                }, {
                    id: '2_3',
                    name: 'SuperLED 50',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/4.png',
                    price: 1600,
                }, {
                    id: '2_4',
                    name: 'SuperLCD 55 (Not available)',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/6.png',
                    price: 1350,
                    disabled: true,
                }, {
                    id: '2_5',
                    name: 'SuperLCD 70',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/9.png',
                    price: 4000,
                }],
            }, {
                id: '3',
                name: 'Monitors',
                items: [{
                    id: '3_1',
                    name: '19"',
                    items: [{
                        id: '3_1_1',
                        name: 'DesktopLCD 19',
                        icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/10.png',
                        price: 160,
                    }],
                }, {
                    id: '3_2',
                    name: '21"',
                    items: [{
                        id: '3_2_1',
                        name: 'DesktopLCD 21',
                        icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/12.png',
                        price: 170,
                    }, {
                        id: '3_2_2',
                        name: 'DesktopLED 21',
                        icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/13.png',
                        price: 175,
                    }],
                }],
            }, {
                id: '4',
                name: 'Projectors',
                items: [{
                    id: '4_1',
                    name: 'Projector Plus',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/14.png',
                    price: 550,
                }, {
                    id: '4_2',
                    name: 'Projector PlusHD',
                    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/15.png',
                    price: 750,
                }],
            }];

            */