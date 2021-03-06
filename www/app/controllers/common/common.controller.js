'use strict';
var controllername = 'common';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$location', '$ionicSideMenuDelegate', '$cordovaGeolocation' ];

function controller($scope, $location, $ionicSideMenuDelegate, $cordovaGeolocation) {
    var vm = this;
    vm.controllername = fullname;

    var activatedStr = 'item active';
    var itemStr = 'item';
    $scope.foodActivated = activatedStr;
    $scope.punctureActivated = itemStr;
    $scope.mechanicActivated = itemStr;

    $scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};

  	$scope.toggleRight = function() {
    	$ionicSideMenuDelegate.toggleRight();
  	};

  	$scope.goHome = function() {
    	$location.path('/home');
  	};

    $scope.suggestPlace = function() {
      $location.path('/suggestplace');
    };

    $scope.getCurrentLocation = function() {
      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      return $cordovaGeolocation.getCurrentPosition(posOptions);
    };

    $scope.getPlaces = function(placeType) {
      if(placeType=='Puncture') {
        $scope.foodActivated = itemStr;
        $scope.punctureActivated = activatedStr;
        $scope.mechanicActivated = itemStr;
      } else if(placeType=='Mechanic') {
        $scope.foodActivated = itemStr;
        $scope.punctureActivated = itemStr;
        $scope.mechanicActivated = activatedStr;
      } else {
        $scope.foodActivated = activatedStr;
        $scope.punctureActivated = itemStr;
        $scope.mechanicActivated = itemStr;
      }
    };

  	$ionicSideMenuDelegate.canDragContent(true);
}

controller.$inject = deps;
app.controller(fullname, controller);