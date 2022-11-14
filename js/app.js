// var parent = $rootScope;
// var child = parent.$new();
// var parent = [{
//         "id": "2",
//         "Url": "New",
//         "Name": "New Products",
//         "icon": "bi bi-patch-plus"
//     }, {
//         "id": "3",
//         "Url": "Girl",
//         "Name": "Girl's products",
//         "icon": "fa fa-female",
//         "Items ": [{
//             "id": "3.1",
//             "name": "Quần nữ",
//             "Active": 1,
//             "icon ": '1Nu.png',
//             "Url": "/Sub3_1"
//         }, {
//             "id": "3.2",
//             "Name": 'Áo Polo Nam ',
//             "Active": 1,
//             "icon": '2Nu.png',
//             "Url": "/Sub3_2"
//         }]
//     }, {
//         "id": "4",
//         "Url": "Men",
//         "Name": "Men's products",
//         "icon": "fa fa-male",
//         "Items ": [{
//             "id": "4.1",
//             "Name": "Quần nam",
//             "Active": 1,
//             "icon ": '1Nam.png',
//             "Url": "/Sub4_1"
//         }, {
//             "id": "4.2",
//             "Name": 'Áo Polo Nữ ',
//             "Active": 1,
//             "icon": '4.png',
//             "Url": "/Sub4_2"
//         }]
//     },

//     {
//         "id": "5",
//         "Url": "Contact",
//         "Name": "Contact",
//         "icon": "fa fa-users"
//     }
// ];
var app = angular.module('myapp', ['ngRoute'])
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.htm",
            controller: "homeController"
        })
        .when("/New", {
            templateUrl: "NewProduct.htm",
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
        // Thông tin về menu chính 
        .when("/Detailsp", {
            templateUrl: "spDetails.htm",
            controller: "DetailController"
        })
        // Thông tin về menu chính 
})

// =======================================================================================

app.controller('main_controller', function($scope) {

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
            "Url": "New",
            "Name": "New Products",
            "icon": "bi bi-patch-plus"
        }, {
            "id": "3",
            "Url": "Girl",
            "Name": "Girl's products",
            "icon": "fa fa-female",
            "Items": [{
                "id": "3.1",
                "Name": "Quần nữ menu nữ",
                "Active": 1,
                "icon ": '1Nu.png',
                "Url": "Detailsp"
            }, {
                "id": "3.2",
                "Name": 'Áo Polo nữ ăn chơi  ',
                "Active": 1,
                "icon": '2Nu.png',
                "Url": "Detailsp"
            }]
        }, {
            "id": "4",
            "Url": "Men",
            "Name": "Men's products",
            "icon": "fa fa-male",
            "Items": [{
                "id": "4.1",
                "Name": "Quần nam boy ",
                "Active": 1,
                "icon ": '1Nam.png',
                "Url": "Detailsp"
            }, {
                "id": "4.2",
                "Name": 'Áo Polo nam ',
                "Active": 1,
                "icon": '4.png',
                "Url": "Detailsp"
            }]
        }


    ];
    $scope.DataProdut_OLD = [{
            Id: "00001",
            NameSP: " 1 Hamburg Suites ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm ",
            Discount: 10,
            Price: 299,
            Num: 55,
            IDGroup: "Girl"
        }, {
            Id: "00002",
            NameSP: "2 Hamburg Suites ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm ",
            Discount: 10,
            Price: 299,
            Num: 55,
            IDGroup: "Girl"
        },
        {
            Id: "00003",
            NameSP: "3 Hamburg Suites ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm ",
            Discount: 10,
            Price: 299,
            Num: 55,
            IDGroup: "Men"
        }

    ];
    // DATA - PRODUCTS 188 -  746 ====================================================

    $scope.DataProdut = [{
            ID: "00001",
            NameSP: "Áo Sơ Mi Thom Browne RWB Striped Grey Straight",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Thom Browne RWB Striped Grey Straight Fit MWL301A F0013 415 Màu Xám là chiếc áo dành cho nam đến từ\nthương hiệu Thom Browne nổi tiếng. Đây là mẫu áo được giới trẻ ưa chuộng bởi kiểu dáng trẻ trung năng động, chất vải cao\ncấp, mang đến cảm giác thoải mái cho người mặc",
            Discount: 05,
            Price: 299,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 36
            }],
            Colors: "Màu Xám",
            Images: [{
                FileName: "00001A.jpg "
            }, {
                FileName: "00001B.jpg"
            }, {
                FileName: "00001C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00001.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },
        {
            ID: "00002",
            NameSP: "Áo Sơ Mi Thom Browne RWB White MWL150E03113",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "  Áo Sơ Mi Thom Browne RWB White MWL150E03113 Màu Trắng là chiếc áo dành cho nam đến từ thương hiệu Thom\nBrowne nổi tiếng. Áo Sơ Mi Thom Browne được thiết kế đơn giản nhưng không mất đi sự tinh tế với họa tiết ấn tượng, mang\nđến sự trẻ trung và hấp dẫn ánh mắt của những người xung quanh",
            Discount: 6,
            Price: 256,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 31,
                NoSiz: 34,
                NoSiz: 36,
                NoSiz: 40,
            }],
            Colors: "trắng",
            Images: [{
                FileName: "00002A.jpg "
            }, {
                FileName: "00002B.jpg"
            }, {
                FileName: "00002C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00002.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },
        {
            ID: "0003",
            NameSP: "Áo Polo Thom Browne Check Short Sleeve MJP156G 07975415 ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Thom Browne RWB White MWL150E03113 Màu Trắng là chiếc áo dành cho nam đến từ thương hiệu Thom\nBrowne nổi tiếng. Áo Sơ Mi Thom Browne được thiết kế đơn giản nhưng không mất đi sự tinh tế với họa tiết ấn tượng, mang\nđến sự trẻ trung và hấp dẫn ánh mắt của những người xung quanh",
            Discount: 03,
            Price: 5500000,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 38,
            }],
            Colors: "Xanh Navy",
            Images: [{
                FileName: "00003A.png "
            }, {
                FileName: "00003B.png"
            }, {
                FileName: "00003.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00003.png",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },
        {
            ID: "00004",
            NameSP: "Áo Cardigan Thom Browne Mens Sweatshirt",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Thom Browne RWB White MWL150E03113 Màu Trắng là chiếc áo dành cho nam đến từ thương hiệu Thom Browne nổi tiếng.Áo Sơ Mi Thom Browne được thiết kế đơn giản nhưng không mất đi sự tinh tế với họa tiết ấn tượng, mang đến sự trẻ trung và hấp dẫn ánh mắt của những người xung quanh ",
            Discount: 03,
            Price: 310,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 40,
            }],
            Colors: "Màu Xám",
            Images: [{
                FileName: "00004A.jpg "
            }, {
                FileName: "00004B.jpg"
            }, {
                FileName: "00004C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00004.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00005",
            NameSP: "Versace Jeans 73GAIT26 CF00T G89",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo NI Versace Jeans Couture Warranty Foil Logo 73GAIT26 CFOOT G89 Màu Đen là chiếc áo thời trang đến từ thương hiệu Versace nổi tiếng của Ý.Áo Versace Jeans Couture Warranty Foil Logo 73 GAIT26 CF00T G89 có kiểu dáng trẻ trung và được làm từ chất vải cao cấp mang lại sự thoải mái cho người mặc nên được các chàng trai ưa chuộng ",
            Discount: 05,
            Price: 297,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 36,
            }],
            Colors: "Màu Đen",
            Images: [{
                FileName: "00005A.jpg "
            }, {
                FileName: "00005B.jpg"
            }, {
                FileName: "00005A.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00005.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00006",
            NameSP: "Áo Phông DSquared2 Icon Print Black Jersey T-Shirt S79GC0003S23009",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Phông DSquared2 Icon Print Black Jersey T-Shirt S79GC0003S23009 đến từ thương hiệu Dsquared2 nổi tiếng của Ý. Mẫu áo Icon Print Black Jersey T - Shirt sở hữu kiểu dáng trẻ trung và hiện đại, cùng chất liệu cao cấp thấm hút mồ hôi tốt, mang đến cảm giác thoải mái khi mặc đi học hay đi chơi với bạn bè.",
            Discount: 09,
            Price: 300,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 37,
            }],
            Colors: "Màu Đen",
            Images: [{
                FileName: "00006A.jpg "
            }, {
                FileName: "00006B.jpg"
            }, {
                FileName: "00006C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00006.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00008",
            NameSP: "Áo Sơ Mi Burberry Short-sleeve Check Stretch Cotton Shirt Camel",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Chiếc áo sơ miBurberry Brit Short Sleeve Check Cotton Shirt của thương hiệu Burberry được biết đến với thiết kế độc quyềnlà hoạ tiết hoa văn kẻ caro.",
            Discount: 10,
            Price: 301,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 41,
            }],
            Colors: "Màu vàng",
            Images: [{
                FileName: "00008A.jpg "
            }, {
                FileName: "00008B.jpg"
            }, {
                FileName: "00008C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00008.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00009",
            NameSP: "Áo Sơ Mi Burberry Check Motif 8055492 B2412 ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Burberry Check Motif 8055492 B2412 Phối Màu là chiếc áo sơ mi nam được giới trẻ ưa chuộng đến từ thương hiệu Burberry nổi tiếng của Anh.Được thiết kế với kiểu dáng trẻ trung nhưng cũng không kém phần lịch lãm, sang trọng, kết hợp chất liệu cao cấp,  mang lại cảm giác thoải mái cho người mặc",
            Discount: 07,
            Price: 340,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 39,
            }],
            Colors: "Phối màu",
            Images: [{
                FileName: "00009A.jpg "
            }, {
                FileName: "00009B.jpg"
            }, {
                FileName: "00009C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00009.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00010",
            NameSP: "Áo Thun Nam Burberry Icon Stripe Placket Cotton Piqué Polo",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Thun Nam Icon Stripe Placket Cotton Piqué Polo Shirt Màu Đen được thiết kế cổ bẻ, tay ngắn tạo nên sự năng động, trẻ trung cho người mặc nhưng cũng không kém phần lịch lãm, sang trọng.Với chất liệu 100 % cotton,  áo có mềm, mịn, thông   thoáng tạo cảm giác thoải mái cho người mặc.",
            Discount: 05,
            Price: 298,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 36,
            }],
            Colors: "Phối màu",
            Images: [{
                FileName: "00010A.jpg "
            }, {
                FileName: "00010B.jpg"
            }, {
                FileName: "00010C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00010.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00010",
            NameSP: "Áo Thun Nam Burberry Icon Stripe Placket Cotton Piqué Polo",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Thun Nam Icon Stripe Placket Cotton Piqué Polo Shirt Màu Đen được thiết kế cổ bẻ, tay ngắn tạo nên sự năng động, trẻ",
            Discount: 06,
            Price: 301,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 39
            }],
            Colors: "Phối màu",
            Images: [{
                FileName: "00010A.jpg "
            }, {
                FileName: "00010B.jpg"
            }, {
                FileName: "00010C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00010.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00011",
            NameSP: "Áo Phông Dsquared2 Cotton T-Shirt With Logo S71GD0998 ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Phông Dsquared2 Cotton T-Shirt With Logo S71GD0998 Màu Trắng đến từ thương hiệu Dsquared2 của ý. Dsquared2",
            Discount: 05,
            Price: 302,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 41,
            }],
            Colors: "Phối màu",
            Images: [{
                FileName: "00011A.jpg "
            }, {
                FileName: "00011B.jpg"
            }, {
                FileName: "00011C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00011.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00012",
            NameSP: "Áo Phông Neil Barrett Felix The Cat Thunderbolt Fair Isle T-Shirt BJT014D-R29S",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Phông Neil Barrett Felix The Cat Thunderbolt Fair Isle T-Shirt Màu Trắng là chiếc áo cao cấp đến từ thương hiệu Neil",
            Discount: 08,
            Price: 310,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 40,
            }],
            Colors: "Màu trắng",
            Images: [{
                FileName: "00012A.jpg "
            }, {
                FileName: "00012B.jpg"
            }, {
                FileName: "00012C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00012.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00013",
            NameSP: "Áo Sơ Mi Lacoste Men Regular Fit Buttoned Collar Blue Shirt CH6237-1ZZ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Lacoste Men Regular Fit Buttoned Collar Blue Shirt CH6237-1ZZ Màu Xanh Nhạt thiết kế kiểu dáng trẻ trung, hiện đại đến từ thương hiệu Lacoste nổi tiếng của Mỹ.Áo được thiết kế kiểu dáng trẻ trung và được làm từ chất liệu cao cấp bền  đẹp trong quá trình sử dụng ",
            Discount: 06,
            Price: 303,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 36,
            }],
            Colors: "Màu Xanh Nhạt",
            Images: [{
                FileName: "00013A.jpg "
            }, {
                FileName: "00013B.jpg"
            }, {
                FileName: "00013C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00013.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00014",
            NameSP: "Áo Sơ Mi Dài Tay Dsquared2 Sleeve Shirt S74DM0514 S36275",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Dài Tay Dsquared2 Sleeve Shirt S74DM0514 S36275 Màu Trắng là chiếc áo thời trang dành cho nam đến từ thương hiệu Dsquared2 nổi tiếng của Ý.Dsquared2 Sleeve Shirt S74DM0514 S36275 có kiểu dáng trẻ trung nhưng cũng không kém phần lịch lãm, sang trọng ",
            Discount: 05,
            Price: 300,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 40,
            }],
            Colors: "Màu Trắng",
            Images: [{
                FileName: "00014A.jpg "
            }, {
                FileName: "00014B.jpg"
            }, {
                FileName: "00014C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00014.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00015",
            NameSP: "Áo Polo Hermès 'Rayure Sellier' Polo Shirt With Pocket",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Polo Hermès Rayure Sellier Polo Shirt With Pocket Màu Vàng Size M thiết kế kiểu dáng hiện đại trẻ trung.Áo được làm từ chất vải cao cấp mang đến cho người mặc cảm giác thoải mái nhất ",
            Discount: 05,
            Price: 300,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 37,
            }],
            Colors: "Màu Vàng",
            Images: [{
                FileName: "00015A.jpg "
            }, {
                FileName: "00015B.jpg"
            }, {
                FileName: "00015C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00015.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        },

        {
            ID: "00016",
            NameSP: "Áo Sơ Mi Alexander McQueen Tape Logo Harness 646759 QQN66 4108",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Áo Sơ Mi Alexander McQueen Tape Logo Harness 646759 QQN66 4108 Màu Xanh Navy là chiếc áo thời trang đến từ thương hiệu Alexander Mcqueen nổi tiếng của Anh.Áo thiết kế trẻ trung cùng chất liệu cao cấp, giúp bạn cảm thấy thoải mái trong các hoạt động hàng ngày. ",
            Discount: 05,
            Price: 299,
            Num: 55,
            IDGroup: "Men",
            Size: [{
                NoSiz: 33,
                NoSiz: 34,
                NoSiz: 35,
                NoSiz: 39,
            }],
            Colors: "Màu Xanh Navy",
            Images: [{
                FileName: "00016A.jpg "
            }, {
                FileName: "00016B.jpg"
            }, {
                FileName: "00016C.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "00016.jpg",
                "widthRatio": 2,
                "heightRatio": 2
            }, {
                FileName: "Bedroom-1-2.jpg"
            }, {
                FileName: "Bathroom-0.jpg"
            }]
        }
    ];


    // $scope.select = function($index) {
    //     $scope.sublists = $scope.MenuItem[$index];
    //     $scope.subMenuShow = true;
    // };


    $scope.getValueFromsearch = function() {
        var SearchScope = angular.element('#txtsearch').$scope();
        $scope.SectionSearch = true;
        $scope.subMenuShow = false;
        $scope.SectionProducts = true;
        $scope.IDGroups = '';
        Sectionview = false;
        subMenuShow = false;
        $scope.lisProduct = angular.$scope.MenuItem;
        console.log(lisProduct);
    }


    $scope.init = function() {

        $scope.subMenuShow = false; // Phần section hiển thị menu con mặc định ẩn 
        $scope.SectionProducts = false; // Phần section hiển thị Danh sách sản phẩm 
        $scope.ShowDetailSp = false; // Phần Section hiển thị nội dung chi tiết sản phẩm
        $scope.Sectionview = false;
    };

    $scope.ListSubMenu = function($index) {
        $scope.sublists = {};
        $scope.sublists = $scope.MenuItem[$index].Items;
        $scope.IDGroups = $scope.MenuItem[$index].Url; // Được thể hiện khi lọc dữ liệu tương ứng với các nhóm trong controller của site con 
        $scope.subMenuShow = true;
        $scope.SectionProducts = true;

    };
    ///Hàm hiển thị View cho Subsite contact
    $scope.initEnable = function() {

        $scope.subMenuShow = false; // Phần section hiển thị menu con mặc định ẩn 
        $scope.SectionProducts = false; // Phần section hiển thị Danh sách sản phẩm 
        $scope.ShowDetailSp = false; // Phần Section hiển thị nội dung chi tiết sản phẩm
        $scope.Sectionview = true;
    };



    // Hàm hiển thị chi tiết sản phẩm 
    // Nhiệm vụ Enable Sectiown chi tiết sản phẩm :  
    $scope.FnShowSectionSP = function($index) {
        $scope.listDetailSP = {};
        $scope.listDetailSP = $scope.DataProdut[$index];

        $scope.ShowDetailSp = true;
        $scope.subMenuShow = false;
        $scope.SectionProducts = false;
    };

    // function navCtrl($scope) {
    //     $scope.lists = [{
    //         name: "Cinema"
    //     }, {
    //         name: "TV Shows"
    //     }, {
    //         name: "Music"
    //     }, {
    //         name: "Awards"
    //     }];
    //     $scope.subMenu = [
    //         ["Snatch", "Rockrolla"],
    //         ["Sherlock", "Game of Thrones"],
    //         ["The National", "Johnny Cash", "Xutos & Pontapés"],
    //         ["Oscars", "Golden Globes", "Emmys", "BAFTA"]
    //     ];
    //     $scope.select = function($index) {
    //         $scope.sublists = $scope.subMenu[$index];
    //         $scope.subMenuShow = true;
    //     };
    // }









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

app.controller("SearchController", ["$scope", "$http",
    function($scope, $http) {

        // $scope.geValues = function() {
        //     $http.get('datapro.json').then(function(response) {
        //         $scope.post = response.data;
        //         $scope.personDetails = response.data.Namesp;
        //         console.log(data)
        //     });
        // }


        $scope.getValueFromsearch = function() {
            var SearchScope = angular.element('#txtsearch').$scope();
            $scope.SectionSearch = true;
            $scope.lisProduct = angular.$scope.MenuItem;
            console.log(lisProduct);
        }

    }
]);


app.controller('MenController', function($scope, $http) {
    // $scope.users = [
    //     { name: "abc", email: "abc@gmail.com", fullname: "abc abc" },
    //     { name: "def", email: "def@gmail.com", fullname: "def def" },
    //     { name: "ghi", email: "ghi@gmail.com", fullname: "ghi ghi" }
    // ];




    // $scope.child = function(value) {
    //     var log = [];
    //     angular.forEach(parent, function(item) {
    //         //if ()
    //         this.push(key + ': ' + value);
    //     }, log);
    //     console(log);
    //     return log;
    // };
    // patientsService.getChartData({ filter: $scope.patientid }).success(function(result) {
    //     $scope.chartdata = result.items;
    //     alert("success");
    //     angular.forEach(result.items, function(item) {

    //         alert(item.Image);
    //         if (item.TeethNO == 1) { $rootScope.tooth1 = item.Image; }
    //         if (item.TeethNO == 2) { $rootScope.tooth2 = item.Image; }
    //         if (item.TeethNO == 3) { $rootScope.tooth3 = item.Image; }
    //         if (item.TeethNO == 17) { $rootScope.tooth17 = item.Image; }
    //     });
    // });


    $scope.DataProdut = [{
            Id: "00001",
            NameSP: " 1 Hamburg Suites ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm ",
            Discount: 10,
            Price: 299,
            Num: 55
        }, {
            Id: "00002",
            NameSP: "2 Hamburg Suites ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm ",
            Discount: 10,
            Price: 299,
            Num: 55
        },
        {
            Id: "00003",
            NameSP: "3 Hamburg Suites ",
            Address: "An Der Alster 82",
            Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
            Content: "Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm ",
            Discount: 10,
            Price: 299,
            Num: 55
        }

    ];



});



// app.controller('Men2Controller', function($scope, $http) {
//     $scope.datas = new Array;
//     $http.get("datapro.json").then(function(response) {
//         $scope.datas = response;
//     });
//     // $scope.DataProduct = $scope.datas;
// });

app.controller('Men1Controller', function($scope, $http) {
    // $scope.datas = new Array;
    fetch('datapro.json')
        .then(response => response.json())
        .then(data => console.log('finished'));
    $scope.Pro = data;
    // $http.get('datapro.json').success(function(data) {


});


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
                            $scope.productPrice = `
                    $$ { item.price }
                    `;
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


          

            */