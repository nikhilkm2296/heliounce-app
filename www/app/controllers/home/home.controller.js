'use strict';
var controllername = 'home';

var fullname = 'heliounce.' + controllername;
/*jshint validthis: true */

var deps = [ '$scope', '$location', 'heliounce.PlaceService' ];


function controller( $scope, $location, PlaceService ) {
    var vm = this;
    vm.controllername = fullname;

    vm.home = {};
    vm.home.places = [];

    vm.home.setSelectedPlace = function(place) {
        PlaceService.setSelectedPlace(place);
        $location.path('/place');
    };

    var review = {};
    review.user = "Nikhil KM";
    review.content = "This is a very good place. The hygience is well maintained. You might want to give it a try. I specifically like the vada pav and masala puri over here...";
    review.rating = "4";

    var place = {};
    place.name = "Nanda's Golgappa Shop";
    place.latitude = "";
    place.longitude = "";
    place.distance = "2.5";
    place.rating = "3.7";
    place.pricing = "50 for 2";
    place.disabledFriendly = false;
    place.parking = true;
    place.cardAvailable = false;
    place.wifiAvailable = false;
    place.reviews = [];
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);

    place = {};
    place.name = "Arun's Golgappa Shop";
    place.latitude = "";
    place.longitude = "";
    place.distance = "3.2";
    place.rating = "3.6";
    place.pricing = "50 for 2";
    place.disabledFriendly = true;
    place.parking = true;
    place.cardAvailable = true;
    place.wifiAvailable = true;
    place.reviews = [];
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);

    place = {};
    place.name = "Bhusa's Golgappa Shop";
    place.latitude = "";
    place.longitude = "";
    place.distance = "4.2";
    place.rating = "3.5";
    place.pricing = "50 for 2";
    place.disabledFriendly = true;
    place.parking = true;
    place.cardAvailable = true;
    place.wifiAvailable = true;
    place.reviews = [];
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);

    place = {};
    place.name = "Haris Super Sandwich";
    place.latitude = "";
    place.longitude = "";
    place.distance = "2.8";
    place.rating = "3.5";
    place.pricing = "50 for 2";
    place.disabledFriendly = true;
    place.parking = true;
    place.cardAvailable = true;
    place.wifiAvailable = true;
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);


    place = {};
    place.name = "Sanju's Super Sandwich";
    place.latitude = "";
    place.longitude = "";
    place.distance = "2.8";
    place.rating = "3.5";
    place.pricing = "50 for 2";
    place.disabledFriendly = true;
    place.parking = true;
    place.cardAvailable = true;
    place.wifiAvailable = true;
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);


    place = {};
    place.name = "KS Layout Chats";
    place.latitude = "";
    place.longitude = "";
    place.distance = "2.8";
    place.rating = "4.5";
    place.pricing = "50 for 2";
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);


    place = {};
    place.name = "ISRO Golgappa";
    place.latitude = "";
    place.longitude = "";
    place.distance = "2.8";
    place.rating = "3.5";
    place.pricing = "50 for 2";
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);

    place = {};
    place.name = "ISRO Golgappa 2";
    place.latitude = "";
    place.longitude = "";
    place.distance = "2.8";
    place.rating = "3.5";
    place.pricing = "50 for 2";
    place.reviews = [];
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.reviews.push(review);
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);

    place = {};
    place.name = "ISRO Golgappa 3";
    place.latitude = "";
    place.longitude = "";
    place.distance = "12.8";
    place.rating = "3.5";
    place.pricing = "50 for 2";
    place.images = [];
    place.images.push("img/food-salad-healthy-vegetables.jpg");
    place.images.push("img/city-night-evening-river.jpg");
    place.image = "img/food-salad-healthy-vegetables.jpg";

    vm.home.places.push(place);

    vm.home.carouselList = [];
    vm.home.carouselList.push('img/city-cars-traffic-lights.jpg');
    vm.home.carouselList.push('img/city-night-evening-river.jpg');
    vm.home.carouselList.push('img/pexels-photo-45085.jpeg');
    vm.home.carouselList.push('img/food-salad-healthy-vegetables.jpg');
    

    vm.home.options = {
      loop: false,
      effect: "fade",
      autoplay: 3500,
      speed: 500,
    }

    // vm.home.data = {};
    // $scope.$watch('vm.home.data.slider', function(nv, ov) {
    //   vm.home.slider = vm.home.data.slider;
    // });
}

controller.$inject = deps;
app.controller(fullname, controller);
