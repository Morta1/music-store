(function(){
    'use strict'
    angular
        .module('app')
        .directive('albumDisplayDirective', albumDisplayDirective);

    function albumDisplayDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : 'javascripts/app/templates/album-display.html',
            scope : {
            },
            controller : albumDisplayController,
            controllerAs : 'vm'
        }

        return directive;

        albumDisplayController.$inject = ['$scope', 'albumsService', '$routeParams'];

        function albumDisplayController($scope, albumsService, $routeParams){
            var vm = this;


        }
    }
})();