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
            vm.albums = albumsService.getAlbums();
        }

    }
})();
