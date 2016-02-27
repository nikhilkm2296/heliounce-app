'use strict';
var controllername = 'place';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', 'heliounce.PlaceService' ];

function controller($scope, PlaceService) {
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
    vm.place.selectedPlace = selectedPlace;
    console.log(vm.place.selectedPlace);
}

controller.$inject = deps;
app.controller(fullname, controller);