(function(){
    'use strict'
    angular
        .module('app')
        .controller('AlbumController', AlbumController);
    AlbumController.$inject = ['$log'];

    function AlbumController($log){
        var vm = this;
        $log.info('AlbumController loaded');
    }
})();
