// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('heliounce', ['ionic'])

.config( function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/gate');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'app/partials/home/home.html',
        controller: 'heliounce.home as vm'
    })
    .state('gate', {
        url: '/gate',
        templateUrl: 'app/partials/common/gate.html',
        controller: 'heliounce.gate as vm'
    })
    .state('signin', {
        url: '/signin',
        templateUrl: 'app/partials/account/signin.html',
        controller: 'heliounce.login as vm'
    });
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
