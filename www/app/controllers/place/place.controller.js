'use strict';
var controllername = 'place';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$ionicModal', 'heliounce.PlaceService' ];

function controller($scope, $ionicModal, PlaceService) {
    var vm = this;
    vm.controllername = fullname;

    vm.place = {};

    var facilityAvailableStr = "available";
    
    var selectedPlace = PlaceService.getSelectedPlace();
    
    if(selectedPlace.parking) {
    	vm.place.parkingAvailable = facilityAvailableStr;
    }
    if(selectedPlace.disabledFriendly) {
    	vm.place.disabledFriendly = facilityAvailableStr;
    }
    if(selectedPlace.wifiAvailable) {
    	vm.place.wifiAvailable = facilityAvailableStr;
    }
    if(selectedPlace.cardAvailable) {
    	vm.place.cardAvailable = facilityAvailableStr;
    }

     $ionicModal.fromTemplateUrl('place-reviews-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });

    vm.place.selectedPlace = selectedPlace;

    vm.place.options = {
      loop: false,
      autoplay: 3500,
      effect: "fade",
      speed: 500,
    };

    vm.place.data = {};
    $scope.$watch('vm.place.data.slider', function(nv, ov) {
      vm.place.slider = vm.place.data.slider;
    });
}

controller.$inject = deps;
app.controller(fullname, controller);