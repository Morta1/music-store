(function(){
    'use strict'
    angular
        .module('app')
        .directive('albumDisplayDirective', albumDisplayDirective);

    function albumDisplayDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : 'javascripts/app/templates/album-display.html',
            scope : {},
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
                albumsService.getAlbums()
                    .then((data)=>{
                        vm.albums = data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
            }
        }
    }
})();