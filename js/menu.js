const MainApp = angular.module('MainApp', ['dx']);

MainApp.controller('Group1Controller', ($scope) => {
    $scope.currentProduct = data[0];
    $scope.dataSource = dataSource;

    $scope.listSelectionChanged = function(e) {
        $scope.currentProduct = e.addedItems[0];
    };

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
// Nguyễn Văn Tấn thực hiện Angular


// dữ liệu test menu


const menuData = [{
    id: '1',
    name: 'Fashion Men',
    items: [{
        id: '1_1',
        name: 'Thời trang công sở ',
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
    name: 'Fashion Girl',
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