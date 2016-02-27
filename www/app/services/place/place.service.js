'use strict';
var serviceName = 'PlaceService';

var fullname = 'heliounce.' + serviceName;
/*jshint validthis: true */

var deps = [ 'heliounce.StorageService' ];

function service(StorageService) {
    var vm = this;
    vm.serviceName = fullname;
    var selectedPlace = {};

    function setSelectedPlace(place) {
		StorageService.save( 'selectedPlace', place );
	};

	function getSelectedPlace() {
		return StorageService.get('selectedPlace');
	};

	function clearSelectedPlace( place ) {
		StorageService.remove('selectedPlace');
	};

    return {
    	setSelectedPlace : setSelectedPlace,
    	getSelectedPlace : getSelectedPlace,
    	clearSelectedPlace : clearSelectedPlace
	};
};
service.$inject = deps;
app.factory(fullname, service);