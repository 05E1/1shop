const data = [{
        Id: 00001,
        NameSP: 'Hamburg Suites',
        Address: 'An Der Alster 82',
        Description: 'Only a few hundred meters from the city center, enjoy the energy of Hamburg each and every night of your stay in our hotel.',
        Content: 'Nhập nội dung chi tiết vào đâu giới thiệu về sản phẩm',
        Discount: 10,
        Price: 299,
        Num: 55,
        Images: [{
            FileName: 'Hamburg-1.jpg',
        }, {
            FileName: 'Lobby-0.jpg',
        }, {
            FileName: 'MeetingRoom-4.jpg',
            widthRatio: 2,
            heightRatio: 2,
        }, {
            FileName: 'Restaurant-18.jpg',
            widthRatio: 2,
            heightRatio: 2,
        }, {
            FileName: 'Bedroom-1-2.jpg',
        }, {
            FileName: 'Bathroom-0.jpg',
        }, ],
    },
    // Thêm 10 cái sản phẩm
];

const dataSource = new DevExpress.data.DataSource({
    store: new DevExpress.data.ArrayStore({
        data,
        key: 'Id',
    }),
    group: 'Name',
    searchExpr: ['Hotel_Name', 'City', 'Address'],
});