/**
 *
 */
var app = angular.module('app',['ui.router']);


app.config(['$stateProvider',function($stateProvider){
	$stateProvider
	.state('firstMessage',{
		url: '/first-msg',
		templateUrl: 'view/View.html',
		controller: 'msg1'
	})
	.state('secondMessage',{
		url: '/second-msg',
		templateUrl: 'view/View2.html',
		controller: 'msg2'
	});
}]);

app.controller('msg1',['$scope',function($scope){
	$scope.a = 10;
	$scope.b = 20;
}]);

app.controller('msg2',['$scope',function($scope){
	$scope.c = 30;
	$scope.d = 40;
}]);