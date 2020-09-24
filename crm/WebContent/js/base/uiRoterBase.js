/**
 *
 */
var crm_module;
(function (crm_module) {
    angular.module('crm', ['ui.router']).config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('login', {
                url: '/login',
                views: {
                    'panemain': {
                        templateUrl: 'view/LGIP000001.html',
                        controller: 'LGIP000001Controller',
                        controllerAs: 'lgip000001Controller'
                    }
                }
            }).state('CRMHEADER', {
                views: {
                    'panemain': { templateUrl: 'panel_main.html' },
                    'header@CRMHEADER': {
                        templateUrl: 'view/NCMP999901.html',
                        controller: 'NCMP999901Controller',
                        controllerAs: 'ncmp999901Controller'
                    }
                }
            }).state('CRMHEADER.NCMP000010', {
                views: {
                    'mainContent@CRMHEADER': {
                        templateUrl: 'view/NCMP000010.html',
                        controller: 'NCMP000010Controller',
                        controllerAs: 'ncmp000010Controller'
                    }
                }
            }).state('CRMHEADER.NCMP000110', {
                views: {
                    'mainContent@CRMHEADER': {
                        templateUrl: 'view/NCMP000110.html',
                        controller: 'NCMP000110Controller',
                        controllerAs: 'ncmp000110Controller'
                    }
                }
            }).state('HCMP000010', {
                views: {
                    'mainContent': {
                        templateUrl: 'view/HCMP000010.html',
                        controller: 'HCMP000010Controller',
                        controllerAs: 'hcmp000010Controller'
                    }
                }
            });
        }]);
})(crm_module || (crm_module = {}));
