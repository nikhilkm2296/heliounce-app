'use strict';
var controllername = 'gate';

var fullname = 'heliounce' + '.' + controllername;

// An array of letters to produce the text scroll effect
var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


function animateTitleLetter($scope, $letter, $idx, $timeout, $timeoutValue) {
    if ($idx < arr.length) {
        $scope[$letter] = arr[Math.floor(Math.random()*arr.length)];
        $timeout(function() {
            animateTitleLetter($scope, $letter, $idx + 1, $timeout, $timeoutValue);
        }, $timeoutValue);
    } else {
        $scope[$letter] = $letter.charAt(0);
        $scope[$letter + 'class'] ='hic-gate-text-flip-highlight';
    }
    $scope.$apply();
};

app.controller( fullname, function($scope, $timeout, $location) {
    $scope.h = 'H';
    $scope.hclass = '';

    $scope.e = 'E';
    $scope.eclass = '';
    
    $scope.l = 'L';
    $scope.lclass = '';

    $scope.i = 'I';
    $scope.iclass = '';

    $scope.o = 'O';
    $scope.oclass = '';

    $scope.u = 'U';
    $scope.uclass = '';

    $scope.n = 'N';
    $scope.nclass = '';

    $scope.c = 'C';
    $scope.cclass = '';

    $scope.ee = 'E'; 
    $scope.eeclass = '';

    var vm = this;
    vm.controllername = fullname;

    // Animate the letters by simply changing them randomly
    $timeout(function() {
        animateTitleLetter($scope, 'h', 0, $timeout, 40);
    }, 30);
    $timeout(function() {
        animateTitleLetter($scope, 'e', 0, $timeout, 45);
    }, 45);
    $timeout(function() {
        animateTitleLetter($scope, 'l', 0, $timeout, 50);
    }, 50);
    $timeout(function() {
        animateTitleLetter($scope, 'i', 0, $timeout, 65);
    }, 65);
    $timeout(function() {
        animateTitleLetter($scope, 'o', 0, $timeout, 70);
    }, 70);
    $timeout(function() {
        animateTitleLetter($scope, 'u', 0, $timeout, 75);
    }, 75);
    $timeout(function() {
        animateTitleLetter($scope, 'n', 0, $timeout, 85);
    }, 85);
    $timeout(function() {
        animateTitleLetter($scope, 'c', 0, $timeout, 95);
    }, 95);
    $timeout(function() {
        animateTitleLetter($scope, 'ee', 0, $timeout, 100);
    }, 100);

    $timeout(function() {
        $location.path("/signin");
    }, 4000);

    vm.register = function() {
        $location.path("/register");
    };

    vm.signin = function() {
    };
});
