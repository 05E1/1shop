var app = angular.module('myapp', ['ngRoute'])
    .run(function($rootScope) {
        $rootScope.DataProdut = [{
                ID: "00001",
                NameSP: "Áo Sơ Mi Thom Browne RWB ",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Thom Browne RWB Striped Grey Straight Fit MWL301A F0013 415 Màu Xám là chiếc áo dành cho nam đến từ\nthương hiệu Thom Browne nổi tiếng. Đây là mẫu áo được giới trẻ ưa chuộng bởi kiểu dáng trẻ trung năng động, chất vải cao\ncấp, mang đến cảm giác thoải mái cho người mặc",
                Discount: 05,
                Price: 299,
                Num: 55,
                IDGroup: "Men",
                Brand: "Gucci",
                Bestsell: 1,
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 36
                }],
                Colors: "Màu Xám",
                Images: ["product-17.jpg", {
                    FileName: "product-9.jpg"
                }, {
                    FileName1: "00001B.jpg"
                }, {
                    FileName2: "00001C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00001.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "00002",
                NameSP: "Áo Sơ Mi Thom Browne RWB White MWL150E03113",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "  Áo Sơ Mi Thom Browne RWB White MWL150E03113 Màu Trắng là chiếc áo dành cho nam đến từ thương hiệu Thom\nBrowne nổi tiếng. Áo Sơ Mi Thom Browne được thiết kế đơn giản nhưng không mất đi sự tinh tế với họa tiết ấn tượng, mang\nđến sự trẻ trung và hấp dẫn ánh mắt của những người xung quanh",
                Discount: 6,
                Price: 256,
                Num: 55,
                IDGroup: "Men",
                Brand: "Gucci",
                Size: [{
                    NoSiz: 31,
                    NoSiz: 34,
                    NoSiz: 36,
                    NoSiz: 40,
                }],
                Colors: "trắng",
                Images: ["product-18.jpg", {
                    FileName: "product-10.jpg"
                }, {
                    FileName1: "00002B.jpg"
                }, {
                    FileName2: "00002C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00002.png",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            }, {
                ID: "0003",
                NameSP: "Áo Polo Thom Browne MJP156G 07975415 ",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Thom Browne RWB White MWL150E03113 Màu Trắng là chiếc áo dành cho nam đến từ thương hiệu Thom\nBrowne nổi tiếng. Áo Sơ Mi Thom Browne được thiết kế đơn giản nhưng không mất đi sự tinh tế với họa tiết ấn tượng, mang\nđến sự trẻ trung và hấp dẫn ánh mắt của những người xung quanh",
                Discount: 03,
                Price: 5500000,
                Num: 55,
                IDGroup: "Men",
                Brand: "Gucci",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 38,
                }],
                Colors: "Xanh Navy",
                Images: ["product-1.jpg", {
                    FileName: "product-3.jpg"
                }, {
                    FileName1: "00003B.png"
                }, {
                    FileName2: "00003.png",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00003.png",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            }, {
                ID: "00004",
                NameSP: "Áo Cardigan Thom Browne Mens",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Thom Browne RWB White MWL150E03113 Màu Trắng là chiếc áo dành cho nam đến từ thương hiệu Thom Browne nổi tiếng.Áo Sơ Mi Thom Browne được thiết kế đơn giản nhưng không mất đi sự tinh tế với họa tiết ấn tượng, mang đến sự trẻ trung và hấp dẫn ánh mắt của những người xung quanh ",
                Discount: 03,
                Price: 310,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 40,
                }],
                Colors: "Màu Xám",
                Images: ["product-11.jpg", {
                    FileName: "product-4.jpg "
                }, {
                    FileName1: "00004B.jpg"
                }, {
                    FileName2: "00004C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00004.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00005",
                NameSP: "Versace Jeans Jeans Couture 73GAIT26",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo NI Versace Jeans Couture Warranty Foil Logo 73GAIT26 CFOOT G89 Màu Đen là chiếc áo thời trang đến từ thương hiệu Versace nổi tiếng của Ý.Áo Versace Jeans Couture Warranty Foil Logo 73 GAIT26 CF00T G89 có kiểu dáng trẻ trung và được làm từ chất vải cao cấp mang lại sự thoải mái cho người mặc nên được các chàng trai ưa chuộng ",
                Discount: 05,
                Price: 297,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
                Bestsell: 1,
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 36,
                }],
                Colors: "Màu Đen",
                Images: ["product-2.jpg", {
                    FileName: "product-5.jpg "
                }, {
                    FileName1: "00005B.jpg"
                }, {
                    FileName2: "00005A.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00005.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00006",
                NameSP: "Áo Phông DSquared2 T-Shirt S79GC0003S23009",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Phông DSquared2 Icon Print Black Jersey T-Shirt S79GC0003S23009 đến từ thương hiệu Dsquared2 nổi tiếng của Ý. Mẫu áo Icon Print Black Jersey T - Shirt sở hữu kiểu dáng trẻ trung và hiện đại, cùng chất liệu cao cấp thấm hút mồ hôi tốt, mang đến cảm giác thoải mái khi mặc đi học hay đi chơi với bạn bè.",
                Discount: 09,
                Price: 300,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 37,
                }],
                Colors: "Màu Đen",
                Images: ["product-3.jpg", {
                    FileName: "product-6.jpg "
                }, {
                    FileName1: "00006B.jpg"
                }, {
                    FileName2: "00006C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00006.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00008",
                NameSP: "Áo Sơ Mi Burberry Short-sleeve",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Chiếc áo sơ miBurberry Brit Short Sleeve Check Cotton Shirt của thương hiệu Burberry được biết đến với thiết kế độc quyềnlà hoạ tiết hoa văn kẻ caro.",
                Discount: 10,
                Price: 301,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
                Bestsell: 1,
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 41,
                }],
                Colors: "Màu vàng",
                Images: ["product-7.jpg", {
                    FileName: "product-7.jpg "
                }, {
                    FileName1: "00008B.jpg"
                }, {
                    FileName2: "00008C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00008.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00009",
                NameSP: "Áo Sơ Mi Burberry 8055492 B2412 ",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Burberry Check Motif 8055492 B2412 Phối Màu là chiếc áo sơ mi nam được giới trẻ ưa chuộng đến từ thương hiệu Burberry nổi tiếng của Anh.Được thiết kế với kiểu dáng trẻ trung nhưng cũng không kém phần lịch lãm, sang trọng, kết hợp chất liệu cao cấp,  mang lại cảm giác thoải mái cho người mặc",
                Discount: 07,
                Price: 340,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 39,
                }],
                Colors: "Phối màu",
                Images: [{
                    FileName: "product-8.jpg "
                }, {
                    FileName1: "00009B.jpg"
                }, {
                    FileName2: "00009C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00009.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00010",
                NameSP: "Áo Thun Nam Burberry Piqué Polo",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Thun Nam Icon Stripe Placket Cotton Piqué Polo Shirt Màu Đen được thiết kế cổ bẻ, tay ngắn tạo nên sự năng động, trẻ trung cho người mặc nhưng cũng không kém phần lịch lãm, sang trọng.Với chất liệu 100 % cotton,  áo có mềm, mịn, thông   thoáng tạo cảm giác thoải mái cho người mặc.",
                Discount: 05,
                Price: 298,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
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
                    FileName1: "00010B.jpg"
                }, {
                    FileName2: "00010C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00010.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00010",
                NameSP: "Áo Thun Nam Burberry Icon Stripe Placket",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Thun Nam Icon Stripe Placket Cotton Piqué Polo Shirt Màu Đen được thiết kế cổ bẻ, tay ngắn tạo nên sự năng động, trẻ",
                Discount: 06,
                Price: 301,
                Num: 55,
                IDGroup: "Men",
                Brand: "Louis Vuitton",
                Bestsell: 1,
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
                    FileName1: "00010B.jpg"
                }, {
                    FileName2: "00010C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00010.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00011",
                NameSP: "Áo Phông Dsquared2 Logo S71GD0998 ",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Phông Dsquared2 Cotton T-Shirt With Logo S71GD0998 Màu Trắng đến từ thương hiệu Dsquared2 của ý. Dsquared2",
                Discount: 05,
                Price: 302,
                Num: 55,
                IDGroup: "Men",
                Brand: "BURBERRY",
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
                    FileName1: "00011B.jpg"
                }, {
                    FileName2: "00011C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00011.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00012",
                NameSP: "Áo Phông Neil Barrett T-Shirt BJT014D-R29S",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Phông Neil Barrett Felix The Cat Thunderbolt Fair Isle T-Shirt Màu Trắng là chiếc áo cao cấp đến từ thương hiệu Neil",
                Discount: 08,
                Price: 310,
                Num: 55,
                IDGroup: "Men",
                Bestsell: 1,
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
                    FileName1: "00012B.jpg"
                }, {
                    FileName2: "00012C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00012.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00013",
                NameSP: "Áo Sơ Mi Lacoste Men CH6237-1ZZ",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Lacoste Men Regular Fit Buttoned Collar Blue Shirt CH6237-1ZZ Màu Xanh Nhạt thiết kế kiểu dáng trẻ trung, hiện đại đến từ thương hiệu Lacoste nổi tiếng của Mỹ.Áo được thiết kế kiểu dáng trẻ trung và được làm từ chất liệu cao cấp bền  đẹp trong quá trình sử dụng ",
                Discount: 06,
                Price: 303,
                Num: 55,
                IDGroup: "Men",
                Brand: "BURBERRY",
                Bestsell: 1,
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
                    FileName1: "00013B.jpg"
                }, {
                    FileName2: "00013C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00013.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00014",
                NameSP: "Áo Sơ Mi Dsquared2 S74DM0514 S36275",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Dài Tay Dsquared2 Sleeve Shirt S74DM0514 S36275 Màu Trắng là chiếc áo thời trang dành cho nam đến từ thương hiệu Dsquared2 nổi tiếng của Ý.Dsquared2 Sleeve Shirt S74DM0514 S36275 có kiểu dáng trẻ trung nhưng cũng không kém phần lịch lãm, sang trọng ",
                Discount: 05,
                Price: 300,
                Num: 55,
                IDGroup: "Girl",
                Brand: "BURBERRY",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 40,
                }],
                Colors: "Màu Trắng",
                Images: [{
                    FileName: "product-9.jpg "
                }, {
                    FileName1: "00014B.jpg"
                }, {
                    FileName2: "00014C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00014.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00015",
                NameSP: "Áo Polo Hermès With Pocket",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Polo Hermès Rayure Sellier Polo Shirt With Pocket Màu Vàng Size M thiết kế kiểu dáng hiện đại trẻ trung.Áo được làm từ chất vải cao cấp mang đến cho người mặc cảm giác thoải mái nhất ",
                Discount: 05,
                Price: 300,
                Num: 55,
                IDGroup: "Girl",
                Brand: "BURBERRY",
                Bestsell: 1,
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 37,
                }],
                Colors: "Màu Vàng",
                Images: [{
                    FileName: "product-11.jpg "
                }, {
                    FileName1: "00015B.jpg"
                }, {
                    FileName2: "00015C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00015.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },

            {
                ID: "00016",
                NameSP: "Áo Sơ Mi Alexander 646759 QQN66 4108",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Áo Sơ Mi Alexander McQueen Tape Logo Harness 646759 QQN66 4108 Màu Xanh Navy là chiếc áo thời trang đến từ thương hiệu Alexander Mcqueen nổi tiếng của Anh.Áo thiết kế trẻ trung cùng chất liệu cao cấp, giúp bạn cảm thấy thoải mái trong các hoạt động hàng ngày. ",
                Discount: 05,
                Price: 299,
                Num: 55,
                IDGroup: "Girl",
                Brand: "BURBERRY",
                Bestsell: 1,
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 39,
                }],
                Colors: "Màu Xanh Navy",
                Images: [{
                    FileName: "product-10.jpg "
                }, {
                    FileName1: "00016B.jpg"
                }, {
                    FileName2: "00016C.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "00016.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            }, {
                ID: "000017",
                NameSP: "STONE TWILL CARGO POCKET SHIRT",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Give your off-duty look a chilled vibe with this shirt. Featuring a stone twill material, a cargo pocket detail and an oversized fit. This simple shirt is perfect for styling seamlessly with your existing wardrobe pieces.",
                Discount: "05%",
                Price: "£20.00",
                Num: 55,
                IDGroup: "Girl",
                Brand: "Guci",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 36
                }],
                Colors: "Stone",
                Images: [{
                    FileName: "STONETWILL.png "
                }, {
                    FileName1: "STONETWILL1.png"
                }, {
                    FileName2: "STONETWILL2.png",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "STONETWILL3.png",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            },


            {

                ID: "000018",
                NameSP: "SAND OVERSIZED CROP SWEATSHIRT",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Nail the neutral trend this season with this sand hue sweater. Featuring a sand hue material with an oversized fit and a cropped length. Team with fitted shorts and fresh kicks for an off-duty look we're loving",
                Discount: "13 % OFF",
                Price: "£13.00",
                Num: 56,
                IDGroup: "Girl",
                Brand: "BOSS",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 37,
                }],
                Colors: "Stone",
                Images: [{
                    FileName: "SANDOVERSIZEDCROPSWEATSHIRT.jpg "
                }, {
                    FileName1: "SANDOVERSIZEDCROPSWEATSHIRT1.jpg"
                }, {
                    FileName2: "SANDOVERSIZEDCROPSWEATSHIRT2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "SANDOVERSIZEDCROPSWEATSHIRT.3",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            }, {
                ID: "000019",
                NameSP: "NUDE MESH ABSTRACT DETAIL BODYSUIT",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Add this bodysuit to your weekend look doll. Featuring a nude abstract renaissance print mesh fabric with cup detailing and thin shoulder straps, team this with leather pants and mules for a look that's totally on-trend",
                Discount: "28% OFF",
                Price: "£10.75",
                Num: 57,
                IDGroup: "Girl",
                Brand: "CHANEL",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 38,
                }],
                Colors: "Green",
                Images: [{
                    FileName: "NUDEMESHABSTRACTRENAISSANCEPRINTCUPDETAILBODYSUIT.jpg "
                }, {
                    FileName1: "NUDEMESHABSTRACTRENAISSANCEPRINTCUPDETAILBODYSUIT1.jpg"
                }, {
                    FileName2: "SNUDEMESHABSTRACTRENAISSANCEPRINTCUPDETAILBODYSUIT2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "NUDEMESHABSTRACTRENAISSANCEPRINTCUPDETAILBODYSUIT3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000020",
                NameSP: "SAND SWEAT CUFFED JOGGERS",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Keep your off-duty look cosy with these casual joggers. Featuring a stone material with an elasticated waistband and elasticated cuffs, team them with a matching sweater and chunky kicks for the ultimate everyday outfit",
                Discount: "10% OFF",
                Price: "£18.00",
                Num: 58,
                IDGroup: "Girl",
                Brand: "DIOR",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 35,
                    NoSiz: 40,
                }],
                Colors: "Sand",
                Images: [{
                    FileName: "SANDSWEATCUFFEDHIGHWAISTJOGGERS.jpg "
                }, {
                    FileName1: "SANDSWEATCUFFEDHIGHWAISTJOGGERS1.jpg"
                }, {
                    FileName2: "SANDSWEATCUFFEDHIGHWAISTJOGGERS2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "SANDSWEATCUFFEDHIGHWAISTJOGGERS3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000021",
                NameSP: "BLACK SPORT ACADEMY PRINTED T SHIRT",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Level up the street wear vibes with this must-have top. Featuring a black material with a 'Sport Academy' print and a relaxed fit, we are in love. Pair with comfy bottoms, fresh kicks and accessories for a look that will keep you comfy",
                Discount: "10 % OFF",
                Price: "£9.00",
                Num: 59,
                IDGroup: "Girl",
                Brand: "VERSACE",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 38,
                    NoSiz: 40,
                }],
                Colors: "Black",
                Images: [{
                    FileName: "BLACKSPORTACADEMYPRINTEDTSHIRT.jpg "
                }, {
                    FileName1: "BLACKSPORTACADEMYPRINTEDTSHIRT1.jpg"
                }, {
                    FileName2: "BLACKSPORTACADEMYPRINTEDTSHIRT2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "BLACKSPORTACADEMYPRINTEDTSHIRT3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000022",
                NameSP: "BLACK MAXI CONTRAST HOODED PUFFER",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Level up the street wear vibes with this must-have top. Featuring a black material with a 'Sport Academy' print and a relaxed fit, we are in love. Pair with comfy bottoms, fresh kicks and accessories for a look that will keep you comfy",
                Discount: "10 % OFF",
                Price: "£54.00",
                Num: 60,
                IDGroup: "Girl",
                Brand: "VERSACE",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 38,
                    NoSiz: 40,
                }],
                Colors: "Black",
                Images: [{
                    FileName: "BLACKMAXICONTRASTHOODEDPUFFER.jpg "
                }, {
                    FileName1: "BLACKMAXICONTRASTHOODEDPUFFER1.jpg"
                }, {
                    FileName2: "BLACKMAXICONTRASTHOODEDPUFFER2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "BLACKMAXICONTRASTHOODEDPUFFER3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000023",
                NameSP: "BLACK CARGO ZIP THROUGH BELTED SHIRT DRESS",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "This shirt dress is perfect for your new season wardrobe doll. Featuring a black material with a zip-through style and a belted design, we're obsessed. Wear with white chunky boots, gold accessories and a mini bag for a combo we can't get enough of.",
                Discount: "9% OFF",
                Price: "£29.00",
                Num: 61,
                IDGroup: "Girl",
                Brand: "VERSACE",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 38,
                    NoSiz: 40,
                }],
                Colors: "Black",
                Images: [{
                    FileName: "BLACKCARGOZIPTHROUGHBELTEDSHIRTDRESS.jpg "
                }, {
                    FileName1: "BLACKCARGOZIPTHROUGHBELTEDSHIRTDRESS1.jpg"
                }, {
                    FileName2: "BLACKCARGOZIPTHROUGHBELTEDSHIRTDRESS2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "BLACKCARGOZIPTHROUGHBELTEDSHIRTDRESS3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000024",
                NameSP: "GREY SLINKY CUT OUT SIDE BODYSUIT",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "A bodysuit is essential this season and we are loving this one. Featuring a grey slinky material with a cut out side design and a flattering fit, what more could you ask for? Wear with statement bottoms and clear heels for a fierce finish.",
                Discount: "10% OFF",
                Price: "£9.00",
                Num: 62,
                IDGroup: "Girl",
                Brand: "VERSACE",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 38,
                    NoSiz: 40,
                }],
                Colors: "Grey",
                Images: [{
                    FileName: "GREYSLINKYCUTOUTSIDEBODYSUIT.jpg "
                }, {
                    FileName1: "GREYSLINKYCUTOUTSIDEBODYSUIT1.jpg"
                }, {
                    FileName2: "GREYSLINKYCUTOUTSIDEBODYSUIT2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "GREYSLINKYCUTOUTSIDEBODYSUIT3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000025",
                NameSP: "WHITE WOVEN OPEN BACK BUTTON DETAIL CINCHED BLAZER",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "Think all things chic with this staple blazer doll. Featuring a white woven material with an open back design, a button fastening, a cinched waist and a flattering fit, we are in love. Team with the matching bottoms, high heels and accessories for an all eyes on you vibe.",
                Discount: "11% OFF",
                Price: "£41.00",
                Num: 63,
                IDGroup: "Girl",
                Brand: "DIOR",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 34,
                    NoSiz: 37,
                    NoSiz: 40,
                }],
                Colors: "White",
                Images: [{
                    FileName: "WHITEWOVENOPENBACKBUTTONDETAILCINCHEDBLAZER.jpg "
                }, {
                    FileName1: "WHITEWOVENOPENBACKBUTTONDETAILCINCHEDBLAZER1.jpg"
                }, {
                    FileName2: "WHITEWOVENOPENBACKBUTTONDETAILCINCHEDBLAZER2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "WHITEWOVENOPENBACKBUTTONDETAILCINCHEDBLAZER3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]

            }, {
                ID: "000026",
                NameSP: "STONE CARGO POCKET DETAIL BOXY CROPPED SHIRT",
                Address: "An Der Alster 82",
                Description: "Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.",
                Content: "This shirt is everything you need to take on the new season. Featuring a stone material with pocket detailing and cropped boxy fit, how could you say no? Wear with the matching skirt and lace-up heels for a style that will get you noticed.",
                Discount: "20% OFF",
                Price: "£20.00",
                Num: 64,
                IDGroup: "Girl",
                Brand: "DIOR",
                Size: [{
                    NoSiz: 33,
                    NoSiz: 35,
                    NoSiz: 36,
                    NoSiz: 40,
                }],
                Colors: "Stone",
                Images: [{
                    FileName: "STONECARGOPOCKETDETAILBOXYCROPPEDSHIRT.jpg "
                }, {
                    FileName1: "STONECARGOPOCKETDETAILBOXYCROPPEDSHIRT1.jpg"
                }, {
                    FileName2: "STONECARGOPOCKETDETAILBOXYCROPPEDSHIRT2.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName3: "STONECARGOPOCKETDETAILBOXYCROPPEDSHIRT3.jpg",
                    "widthRatio": 2,
                    "heightRatio": 2
                }, {
                    FileName4: "Bedroom-1-2.jpg"
                }, {
                    FileName5: "Bathroom-0.jpg"
                }]
            }
        ];

    })


app.config(function($routeProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl: "index.html",
    //     // controller: "homeController"
    // })
        .when("/Main", {
            templateUrl: "main.htm",
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
        .otherwise({
            redirectTo: "/index.html"
        });
    // Thông tin về menu chính 
})

// =======================================================================================

app.controller('main_controller', function($scope) {


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

    // DATA - PRODUCTS 188 -  746 ====================================================


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
        // Sectionview = false;
        subMenuShow = false;
        $scope.lisProduct = angular.$scope.DataProdut;
        console.log(lisProduct);
    }


    $scope.init = function() {

        $scope.subMenuShow = false; // Phần section hiển thị menu con mặc định ẩn 
        $scope.SectionProducts = false; // Phần section hiển thị Danh sách sản phẩm 
        $scope.ShowDetailSp = false; // Phần Section hiển thị nội dung chi tiết sản phẩm
        // $scope.Sectionview = true;
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
        // $scope.Sectionview = true;
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
            var log = [];
            var SearchScope = angular.element('#txtsearch').$scope();
            angular.forEach(DataProdut, function(key, value) {
                if (key == "NameSP" && value == 'SearchScope') {
                    return this.push(key + ': ' + value);
                }
            }, log);
            console(log);
            return log;
        };

        $scope.getValueFromsearch = function() {
            // angular.forEach($scope.globalContent, function(el) {
            //     $scope.nameLbl = findObject($scope.globalContent, "name_col_lbl")['value]'
            //         return);
            //     $scope.bdayLbl = findObject($scope.globalContent, "bday_col_lbl")['value]');

            // });
            $scope.SectionSearch = true;
            $scope.lisProduct = angular.$scope.DataProdut;
            console.log(lisProduct);
        }

    }
]);


app.controller('MenController', function($scope, $http) {
    $scope.productMen = function(value) {
        var log = [];
        angular.forEach(DataProdut, function(key, value) {
            if (key == "IDGroup" && value == 'Men') {
                return this.push(key + ': ' + value);
            }
        }, log);
        console(log);
        return log;
    };
});


app.controller('GirlController', function($scope, $http) {
    $scope.productGirl = function(value) {
        var log = [];
        angular.forEach(DataProdut, function(key, value) {
            if (key == "IDGroup" && value == 'Girl') {
                return this.push(key + ': ' + value);
            }
        }, log);
        console(log);
        return log;
    };
});


app.controller('Men1Controller', function($scope, $http) {
    // $scope.datas = new Array;
    fetch('datapro.json')
        .then(response => response.json())
        .then(data => console.log('finished'));
    $scope.Pro = data;
    // $http.get('datapro.json').success(function(data) {


});