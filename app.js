var module = angular.module("myapp", []);

module.controller("myController1", function($scope) {
	$scope.data = { theVar : "Value One"};
});

module.controller("myController2", function($scope) {
	$scope.data = { theVar : "Value Two"};
});

//AngularJS Event Handling Introduction
/*
	ng-click
	ng-dbl-click
	ng-mousedown
	ng-mouseup
	ng-mouseenter
	ng-mouseleave
	ng-mousemove
	ng-mouseover
	ng-keydown
	ng-keyup
	ng-keypress
	ng-change
*/
module.controller("MyController", function($scope) {
    $scope.myData = {};
    $scope.myData.doClick = function() {
        alert("clicked");
    },
    $scope.myData.doClick1 = function(event) {
        alert("clicked: " + event.clientX + ", " + event.clientY);
    },
    $scope.myData.items = [{ v: "1"}, { v: "2"}, { v : "3"} ],

    $scope.myData.doClick2 = function(item, event) {
        alert("clicked: " + item.v + " @ " + event.clientX + ": " + event.clientY);
    }
});