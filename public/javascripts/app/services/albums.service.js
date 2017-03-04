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
        service.returnData = returnData;
        service.getAlbums = getAlbums;

        var albums = {};

        function getAlbums() {
            return albums;
        }

        function returnData(){
            return albumsFactory.returnData()
                .then((data)=>{
                    albums = data;
                })
                .catch((err)=>{
                    $q.reject(err);
                });
        }

        function getGenres(){
            return albumsFactory.returnData()
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