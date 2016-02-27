'use strict';
var controllername = 'common';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$location', '$ionicSideMenuDelegate' ];

function controller($scope, $location, $ionicSideMenuDelegate) {
    var vm = this;
    vm.controllername = fullname;

    $scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};

  	$scope.toggleRight = function() {
    	$ionicSideMenuDelegate.toggleRight();
  	};

  	$scope.goHome = function() {
    	$location.path('/home');
  	};
  	$ionicSideMenuDelegate.canDragContent(true);
}

controller.$inject = deps;
app.controller(fullname, controller);