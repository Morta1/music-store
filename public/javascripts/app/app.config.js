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
                        return albumsService.getAllData()
                            .then(function(){
                            })
                            .catch(function(err){
                                console.log('error fetching albums');
                            });
                    }]
                }
            })
            .when('/:genre', {
                templateUrl : 'javascripts/app/templates/genre.html',
                controller : 'GenreController',
                controllerAs : 'vm',
                resolve : {
                    albums : ['albumsService' , function(albumsService){
                        return albumsService.getAllData()
                            .then(function(){
                            })
                            .catch(function(err){
                                console.log('error fetching albums');
                            });
                    }]
                }
            })
            .when('/:genre/:id', {
                templateUrl : 'javascripts/app/templates/album-page.html',
                controller : 'AlbumController',
                controllerAs : 'vm',
                resolve : {
                    album : ['albumsService', function(albumsService){
                        return albumsService.getAllData()
                            .then(function(){
                            })
                            .catch(function(err){
                                console.log('error album');
                            });
                    }]
                }
            })
            .otherwise({
                redirectTo : '/home'
            });
    }
})();
