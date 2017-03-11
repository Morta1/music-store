(function(){
    'use strict'
    angular
        .module('app')
        .controller('AlbumController', AlbumController);
    AlbumController.$inject = ['$log', 'albumsService'];

    function AlbumController($log, albumsService){
        var vm = this;
        $log.info('AlbumPageController loaded');

        activate();

        function activate(){
            vm.genres = albumsService.getGenres();
            vm.album = albumsService.getAlbums().filter(function(obj) {
                return obj._id == '58c25b8f9d0a7b83a460d3ff';
            });;
            console.log(vm.album);
        }

    }
})();
