(function(){
    'use strict'
    angular
        .module('app')
        .controller('AlbumController', AlbumController);
    AlbumController.$inject = ['$log', 'albumsService', '$routeParams'];

    function AlbumController($log, albumsService, $routeParams){
        var vm = this;
        $log.info('AlbumPageController loaded');
        vm.updateImage = updateImage;
        vm.displayedImage = '';

        activate();

        function activate(){
            vm.genres = albumsService.getGenres();
            albumsService.getSpecificAlbum($routeParams.id)
                .then(function(data){
                    vm.album = data;
                    vm.displayedImage = vm.album.albumImages[0];
                    console.log(vm.album);
                })
                .catch(function(err){
                    console.log("error fecthing album", err);
                });
        }

        function updateImage(img){
            vm.displayedImage = img;
            console.log("updated image");
        }

    }
})();
