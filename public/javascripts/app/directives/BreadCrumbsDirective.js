(function(){
    'use strict'
    angular
        .module('app')
        .directive('breadCrumbsDirective', breadCrumbsDirective);

    function breadCrumbsDirective(){
        var directive = {
            restrict : 'EA',
            templateUrl : 'javascripts/app/templates/breadcrumbs.html',
            scope : {},
            controller : breadCrumbsController,
            controllerAs : 'vm'
        }

        return directive;

        breadCrumbsController.$inject = ['$scope', '$location'];

        function breadCrumbsController($scope, $location){
            var vm = this;

            vm.userPath = [];

            activate();

            function activate(){
                if ($location.path() !== "/home"){
                    vm.userPath = $location.path().split('/');
                    //remove first element (empty)
                    vm.userPath.shift();
                    //add first element 'home'
                    vm.userPath.unshift('Home');
                }
                else{
                    vm.userPath.unshift('Home');
                }
            }
        }
    }
})();
