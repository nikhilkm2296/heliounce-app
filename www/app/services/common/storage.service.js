'use strict';
var serviceName = 'StorageService';

var fullname = 'heliounce.' + serviceName;
/*jshint validthis: true */

var deps = [ '$window' ];

function service($window) {
    var vm = this;
    vm.serviceName = fullname;
    var selectedPlace = {};

    function save(key, data) {
        $window.localStorage.setItem(key, JSON.stringify(data));
    }

    function remove(key) {
        $window.localStorage.removeItem(key);
    }

    function clearAll() {
        $window.localStorage.clear();
    }

    function get(key) {
        return JSON.parse($window.localStorage.getItem(key));
    };

    return {
    	get : get,
    	save : save,
    	remove : remove,
    	clearAll : clearAll
	};
};

service.$inject = deps;
app.factory(fullname, service);