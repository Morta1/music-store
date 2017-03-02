(function(){
    'use strict'
    angular
        .module('app')
        .directive('genreDirective', genreDirective);

    function genreDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : 'javascripts/app/templates/genre.html',
            scope : {},
            controller : genreController,
            controllerAs : 'vm'
        }

        return directive;

        genreController.$inject = ['$scope', 'albumsService'];

        function genreController($scope, albumsService){
            var vm = this;

            vm.genres = {};

            activate();

            function activate(){
                albumsService.getGenres()
                    .then((data)=>{
                        vm.genres = data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
            }
        }
    }
})();