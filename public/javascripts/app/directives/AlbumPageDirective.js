(function(){
    'use strict'
    angular
        .module('app')
        .directive('albumPageDirective', albumPageDirective);

    function albumPageDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : '',
            scope : {
                data : '='
            },
            controller : albumPageController,
            controllerAs : 'vm'
        }

        return directive;

        albumPageController.$inject = ['$scope', 'albumsService', '$routeParams'];

        function albumPageController($scope, albumsService, $routeParams){
            var vm = this;
        }
    }
})();