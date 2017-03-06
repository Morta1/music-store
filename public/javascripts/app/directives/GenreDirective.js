(function(){
    'use strict'
    angular
        .module('app')
        .directive('genreDirective', genreDirective);

    function genreDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : 'javascripts/app/templates/genreTemplate.html',
            scope : {
                data : '=',
                genreName : '=?'
            },
            controller : genreController,
            controllerAs : 'vm'
        }

        return directive;

        genreController.$inject = ['$scope'];

        function genreController($scope){
            var vm = this;

            activate();

            function activate(){
            }
        }
    }
})();