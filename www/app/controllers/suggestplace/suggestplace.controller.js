'use strict';
var controllername = 'suggestplace';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$location' ];

function controller($scope, $location) {
    var vm = this;
    vm.controllername = fullname;
    $scope.suggestplace = {};
    $scope.suggestplace.submitPlace = function() {
      console.log( $scope.suggestplace );
    }
}

controller.$inject = deps;
app.controller(fullname, controller);