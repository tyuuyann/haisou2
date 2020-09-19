/**
 *
 */
var crm_module;
(function (crm_module) {
    angular.module('crm', ['ui.router']).config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('login', {
                url: '/',
                templateUrl: 'view/View2.html',
                controller: 'testcontroller',
                controllerAs: 'login'
            });
        }]);
})(crm_module || (crm_module = {}));
