(function(){
    'use strict'
    angular
        .module('app')
        .controller('MainController', MainController);
    MainController.$inject = ['$log', '$scope'];

    function MainController($log, $scope){
        var vm = this;
        $log.info('MainController loaded');


        $scope.$on('hide-loader', function () {
            angular.element('.loader').hide();
        });

        $scope.$on('show-loader', function () {
            angular.element('.loader').show();
        });
    }
})();
