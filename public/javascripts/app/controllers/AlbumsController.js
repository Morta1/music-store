(function(){
    'use strict'
    angular
        .module('app')
        .controller('AlbumsController', AlbumsController);
    AlbumsController.$inject = ['$log'];

    function AlbumsController($log){
        var vm = this;
        $log.info('AlbumController loaded');
    }
})();
