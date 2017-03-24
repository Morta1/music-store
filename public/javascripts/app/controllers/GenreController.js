(function(){
    'use strict'
    angular
        .module('app')
        .controller('GenreController', GenreController);
    GenreController.$inject = ['$log', '$routeParams', 'albumsService'];

    function GenreController($log, $routeParams, albumsService){
        var vm = this;
        $log.info('AlbumController loaded');

        activate();

        function activate(){
            vm.genreName = $routeParams.genre;
            vm.genres = albumsService.getGenres();
            vm.albums = albumsService.getAlbumsFromGenre(vm.genreName);
        }
    }
})();
