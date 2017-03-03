(function(){
    angular
        .module('app', ['ngRoute'])
        .config(myRouter);

    myRouter.$inject = ['$routeProvider'];

    function myRouter($routeProvider){
        $routeProvider
            .when('/home', {
               templateUrl : 'javascripts/app/templates/home.html',
               controller : 'HomeController',
               controllerAs : 'vm'
            })
            .when('/albums', {
                templateUrl : 'javascripts/app/templates/albums.html',
                controller : 'AlbumController',
                controllerAs : 'vm'
            })
            .otherwise({
                redirectTo : '/home'
            });
    }
})();
