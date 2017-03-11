/**
 * Created by Mor on 11-Feb-17.
 */
(function(){
    angular
        .module('app')
        .factory('albumsFactory', albumsFactory);

    albumsFactory.$inject = ['$http', '$q'];

    function albumsFactory($http, $q){
        var factory = {
            getAllData,
            getSpecificAlbum
        };

        return factory;

        function getAllData(){
            return $http.get('/api/getAlbums')
                .then((response) => {
                    console.log(response.data);
                    return response.data;
                })
                .catch((err) => {
                    $q.reject(err);
                });
        }

        function getSpecificAlbum(id){
            return $http.get('/api/getAlbum/'+id)
                .then(function(response){
                    let album = response.data.filter(function(obj) {
                        return obj._id == id;
                    });
                    return album;
                })
                .catch(function(err){

                });
        }

    }
})();