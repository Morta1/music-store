(function(){
    angular
        .module('app', ['ngRoute'])
        .config(myRouter);

    myRouter.$inject = ['$routeProvider'];

    function myRouter($routeProvider){
        console.log("Test config");
        $routeProvider
            .when('/', {
               templateUrl : 'javascripts/app/templates/home.html',
               controller : 'HomeController',
               controllerAs : 'vm'
            });
    }
})();
