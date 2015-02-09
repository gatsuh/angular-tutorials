(function() {
    var app = angular.module('tutorial', []);

        app.controller('tutorialController', ['$http',function($http){
        var store = this;
        store.tutorials = [];
        $http.get('/angular/store-products.json').success(function(data){
            store.tutorials = data;
        });
    }]);

})();
