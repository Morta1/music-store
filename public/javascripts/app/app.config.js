(function(){
    angular
        .module('app', ['ngRoute'])
        .config(myRouter);

    myRouter.$inject = ['$routeProvider'];

    function myRouter($routeProvider){
        $routeProvider
            .when('/', {
               templateUrl : 'javascripts/app/templates/home.html',
               controller : 'HomeController',
               controllerAs : 'vm'
            })
            .when('/album', {
                templateUrl : 'javascripts/app/templates/album.html',
                controller : 'AlbumController',
                controllerAs : 'vm'
            });
    }
})();
