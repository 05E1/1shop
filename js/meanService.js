angular
    .module('app.services', [])
    .factory('DataShowProduct', function($http) {
        return {
            get: function() {
                console.log("inside function");
                return $http.get('datapro.json');

            }
        };
    });


app.service('HttpService', function($http) {
    personList: function() {
        return $http.get('getFile.json');
    }
});

// meanService.js
angular.module('generatorMeanstackApp')
    .service('meanService', function() {
        this.getMeanStuff = function() {
            return ([{
                    component: 'MongoDB',
                    url: 'http://www.mongodb.org'
                },
                {
                    component: 'Express',
                    url: 'http://expressjs.com'
                },
                {
                    component: 'AngularJS',
                    url: 'http://angularjs.org'
                },
                {
                    component: 'Node.js',
                    url: 'http://nodejs.org'
                }
            ])
        };
    });