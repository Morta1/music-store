(function(){
    'use strict'
    angular
        .module('app')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$log', 'albumsService'];

    function HomeController($log, albumsService){
        var vm = this;
        $log.info('HomeController loaded');

        activate();

        function activate(){
            vm.genres = albumsService.getGenres();
            vm.newestAlbum = albumsService.getRecentAlbums(0,1);
            vm.recentAlbums = albumsService.getRecentAlbums(1, 9);
            vm.newAlbums = albumsService.getRecentAlbums(9,29);
        }

    }
})();
