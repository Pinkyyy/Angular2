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

//$watch() - listener, obserwacja
/*
 * The $scope.watch() function creates a watch of some variable.
 * The first function is the value function and the second function is the listener function.
 */
module.controller("MyController3", function($scope){
	$scope.data = { myVar : "Value One"};
	$scope.$watch(
			function(scope) { 
				return scope.data.myVar; 
			},
            function(newValue, oldValue) {
                document.getElementById("myVar").innerHTML =
                    "" + newValue + "";
            }
    );
});

//$digest() and $apply()
module.controller("myController4", function($scope) {
	 
    $scope.data = { time : new Date() };

    $scope.updateTime = function() {
        $scope.data.time = new Date();
    }

    document.getElementById("updateTimeButton")
            .addEventListener('click', function() {
            	console.log("update time clicked");
            	$scope.data.time = new Date();
            	//the data binding will be updated
            	$scope.$digest();
    });
    
    //$scope.$digest(); alternative
    //When the $apply() function call finishes AngularJS calls $digest() internally, so all data bindings are updated.
    /*document.getElementById("updateTimeButton")
	    .addEventListener('click', function() {
		$scope.$apply(function() {
		    console.log("update time clicked");
		    $scope.data.time = new Date();
		});
	});*/
});

//AJAX - The $http Service
module.controller("myController5", function($scope, $http){
	$scope.myData = {};
    $scope.myData.doClick = function(item, event) {
    	//the $http.get() function returns a "promise" object
        var promiseObj = $http.get("ajax_data.jsp");
        
        //This promise object has a success() and an error() function.
        promiseObj.success(function(data, status, headers, config) {
        		$scope.myData.fromServer = data.title;
        	}).error(function(data, status, headers, config) {
        		alert("AJAX failed!");
        	});
    }
});
/*
The $http service has several functions you can use to send AJAX requests. These are:
$http.get(url, config)
$http.post(url, data, config)
$http.put(url, data, config)
$http.delete(url, config)
$http.head(url, config)

If you need to include properties starting with a $ in the data string, convert the data object to a string yourself using JSON.stringify(data).

*/
//$http as a Function var promise = $http(config);
/*
The config parameter is a JavaScript object which can contain the following properties:
method
url
params
headers
timeout
cache
transformRequest
transformResponse
*/

//AngularJS & JSONP (JSON with Padding)
/*The normal AJAX calls can only send requests to URLs within the same domain as the HTML page sending the requests was loaded from. You can get around this with JSONP requests.
Only make JSONP calls to services you trust.
*/
/*var url = "http://jenkov.com/theService.json?callback=JSON_CALLBACK";
	var responsePromise = $http.jsonp( url,
	             {  params : {
	                   p1 : "v1"
	                  ,p2 : "v2"
	                }
	              }
	            );

	responsePromise.success(function(data) {
	    // do something with the returned JavaScript object
	    // ( in the "data" parameter ).
	});*/

//AngularJS Form Handling Introduction
module.controller("MyController6", function($scope){
	$scope.myForm = {};
    $scope.myForm.firstName = "Jan";
    $scope.myForm.lastName  = "Kowalski";
    $scope.myForm.car  = "nissan";
    
    $scope.myForm.phone  = "fiat";
    $scope.myForm.options = [
                             { id : "nissan", name: "Nissan" }
                            ,{ id : "toyota", name: "Toyota" }
                            ,{ id : "fiat"  , name: "Fiat" }
                            ];
    
    $scope.myForm.submitTheForm = function() {
    	alert($scope.myFormNg.firstName);
    };
    
    /*Form properties
     * $pristine   	True if the form has not been changed (no form fields has changed), false if some fields have been changed.
		$dirty	The reverse of $pristine - false if the form has not been changed - true if it has.
		$valid	True if the form field (or the whole form = all form fields) is valid. False if not.
		$invalid	The reverse of the $valid - false if the field (or all fields in the form) is valid, true if the field (or a single field in the for) is invalid.
     * */
    $scope.myForm.getFormFieldCssClass = function(ngModelController) {
        console.log("getting css class: " + ngModelController.$valid) ;
        /*if(ngModelController.$pristine) 
        	return "";
        return ngModelController.$valid ? "fieldValid" : "fieldInvalid";*/
    };
});
































