'use strict';
var controllername = 'login';
var fullname = 'heliounce' + '.' + controllername;

app.controller( fullname, function($scope, $location ) {
    var vm = this;
    vm.login = {};
    vm.login.credentials= {};
    vm.controllername = fullname;

    vm.signin = function() {
        // if(!vm.login.credentials.username || !vm.login.credentials.password) {
        //     console.log('Please enter proper values for credentials');
        // }
        $location.path('/home');
    };
});