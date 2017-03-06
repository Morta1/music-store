/**
 * Created by Mor on 11-Feb-17.
 */
(function(){
    angular
        .module('app')
        .service('albumsService', albumsService);

    albumsService.$inject = ['$q', 'albumsFactory'];

    function albumsService($q, albumsFactory){
        var service = this;

        service.getAlbums = getAlbums;
        service.getGenres = getGenres;
        service.getAllData = getAllData;
        service.getAlbums = getAlbums;
        service.getAlbumsFromGenre = getAlbumsFromGenre;

        var albums = {};

        function getAlbums() {
            return albums;
        }

        function getAllData(){
            return albumsFactory.getAllData()
                .then((data)=>{
                    albums = data;
                })
                .catch((err)=>{
                    $q.reject(err);
                });
        }

        function getGenres(){
            const genres = [];
            angular.forEach(albums, (val, key) => {
                if (genres.indexOf(val.genre) === -1){
                    genres.push(val.genre);
                }
            });
            return genres;
        }

        function getAlbumsFromGenre(genre){
            const albumsFromGenre = [];
            angular.forEach(albums, (val, key) => {
                if (val.genre.toLowerCase() === genre.toLowerCase()){
                    albumsFromGenre.push(val);
                }
            });
            return albumsFromGenre;
        }

    }
})();