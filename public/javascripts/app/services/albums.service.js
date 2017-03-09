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
        service.getRecentAlbums = getRecentAlbums;

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

        function getRecentAlbums(index, amount) {
            const tempAlbums = [];
            angular.copy(albums, tempAlbums);
            const recentAlbums = [];
            let size;
            if (amount === undefined || amount > tempAlbums.length){
                size = tempAlbums.length;
            }
            else{
                size = amount;
            }
            console.log(size);
            tempAlbums.sort(function(a,b) {
                return new Date(a.added).getTime() - new Date(b.added).getTime()
            });
            
            for (let i = index; i < size; i++) {
                recentAlbums.push(tempAlbums[i]);
            }
            console.log('from', index, 'to', size, recentAlbums);
            return recentAlbums;
        }

    }
})();