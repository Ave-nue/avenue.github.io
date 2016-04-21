var app=angular.module('myHomepage',['ngAnimate']);
app.controller('myCtrl',function ($scope,$timeout){
	$scope.hour=0;
	$scope.minute=0;
	$scope.second=0;
	$scope.getCurrent=function (){	
		var now=new Date();
		$scope.hour=now.getHours();
		$scope.minute=now.getMinutes();
		$scope.second=now.getSeconds();
		$timeout($scope.getCurrent, 10);
	}
	$scope.getCurrent();
});