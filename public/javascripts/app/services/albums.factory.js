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
            returnData
        };

        return factory;

        function returnData(){
            return $http.get('javascripts/app/albums.json')
                .then((response) => {
                    return response.data;
                })
                .catch((err) => {
                    $q.reject(err);
                });
        }


    }
})();