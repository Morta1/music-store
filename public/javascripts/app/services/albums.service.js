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

        function getAlbums(){
            return albumsFactory.getAlbums()
                .then((data)=>{
                    return data;
                })
                .catch((err)=>{
                    $q.reject(err);
                });
        }

        function getGenres(){
            return albumsFactory.getAlbums()
                .then((data) => {
                    const genres = [];
                    angular.forEach(data, (val, key) => {
                        if (genres.indexOf(val.genre) === -1){
                            genres.push(val.genre);
                        }
                    });
                    return genres;
                })
                .catch((err) => {
                    $q.reject(err);
                });
        }


    }
})();