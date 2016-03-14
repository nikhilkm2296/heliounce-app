'use strict';
var controllername = 'suggestplace';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$location' ];

function controller($scope, $location) {
    var vm = this;
    vm.controllername = fullname;
    $scope.suggestplace = {};
    $scope.suggestplace.location = "Detecting you location now...";
    $scope.suggestplace.locationPromise = $scope.getCurrentLocation();
    $scope.suggestplace.locationPromise
    .then(function (position) {
    	$scope.suggestplace.coordinates = {};
        $scope.suggestplace.coordinates[ 'latitude' ] = position.coords.latitude;
        $scope.suggestplace.coordinates[ 'longitude' ] = position.coords.longitude;
        $scope.suggestplace.location = '(' + position.coords.latitude + ', ' + position.coords.longitude + ')';
    }, function(err) {

    });

    $scope.suggestplace.submitPlace = function() {
      console.log( $scope.suggestplace );
    }
}

controller.$inject = deps;
app.controller(fullname, controller);