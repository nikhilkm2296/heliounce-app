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
        $scope.reviews_modal = modal;
      });
      $scope.openReviewsModal = function() {
        $scope.reviews_modal.show();
      };
      $scope.closeReviewsModal = function() {
        $scope.reviews_modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.reviews_modal.remove();
      });

      $ionicModal.fromTemplateUrl('place-add-review-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.add_review_modal = modal;
      });
      $scope.openAddReviewModal = function() {
        $scope.add_review_modal.show();
      };
      $scope.closeAddReviewModal = function() {
        $scope.add_review_modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.add_review_modal.remove();
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