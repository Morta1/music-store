(function(){
    'use strict'
    angular
        .module('app')
        .directive('albumDisplayDirective', albumDisplayDirective);

    function albumDisplayDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : 'javascripts/app/templates/album-display.html',
            scope : {
                showDesc : '@'
            },
            controller : albumDisplayController,
            controllerAs : 'vm'
        }

        return directive;

        albumDisplayController.$inject = ['$scope', 'albumsService'];

        function albumDisplayController($scope, albumsService){
            var vm = this;

            vm.albums = {};

            activate();

            function activate(){
                vm.albums = albumsService.getAlbums();
                console.log($scope);
                // console.log(vm);
            }
        }
    }
})();