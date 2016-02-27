'use strict';
var controllername = 'common';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$ionicSideMenuDelegate' ];

function controller($scope, $ionicSideMenuDelegate) {
    var vm = this;
    vm.controllername = fullname;

    $scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};

  	$scope.toggleRight = function() {
    	$ionicSideMenuDelegate.toggleRight();
  	};
  	$ionicSideMenuDelegate.canDragContent(true);
}

controller.$inject = deps;
app.controller(fullname, controller);