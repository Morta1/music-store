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
                const str = '/home/store';
                vm.userPath = $location.path().split('/');
                // vm.userPath = str.split('/');
                //remove empty first element
                vm.userPath.shift();
                console.log(vm.userPath);
            }
        }
    }
})();