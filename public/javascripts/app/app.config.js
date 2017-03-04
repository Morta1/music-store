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
               controllerAs : 'vm',
                resolve : {
                    albums : ['albumsService' , function(albumsService){
                        return albumsService.returnData()
                            .then(function(){
                            })
                            .catch(function(err){
                                console.log('error fetching albums');
                            });
                    }]
                }
            })
            .when('/albums', {
                templateUrl : 'javascripts/app/templates/albums.html',
                controller : 'AlbumsController',
                controllerAs : 'vm',
                resolve : {
                    albums : ['albumsService' , function(albumsService){
                        return albumsService.returnData()
                            .then(function(){
                            })
                            .catch(function(err){
                                console.log('error fetching albums');
                            });
                    }]
                }
            })
            .otherwise({
                redirectTo : '/home'
            });
    }
})();
