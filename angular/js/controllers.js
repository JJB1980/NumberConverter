'use strict';

/* Controllers */
angular.module('App.controllers', []).

controller('homeController', function($scope, appFactory, API) {
	
	$scope.numberToConvert = "";
	
	$scope.convertNumber = function () {
		var num = $scope.numberToConvert;
		console.log(num);
		if (!API.validateNumber(num)) {
			alert("Invalid Number Entered");
			return;
		}
		//return;
		appFactory.convertNumber(num).success(function (response) {
			console.log(response);
			API.storeResult(num,response.result);
			window.location = "#/result/";
			//alert("OK");
		}).error(function () {
			alert("Service Unavailable");
		});
	}

	$scope.cachedNum = function () {
		var show = API.fetchResults();
		if (show) {
			$scope.numberToConvert = show.num;
		}
	}
	
	$scope.cachedNum();
}).

controller('resultController', function($scope, appFactory, API) {
	
	$scope.show = {};
	$scope.show.num = "";
	$scope.show.result = "";
	
	$scope.getResults = function () {
		$scope.show = API.fetchResults();
	}
	
	$scope.returnHome = function () {
		window.location = "#/home/";
	}
	
	$scope.getResults();
});
  
