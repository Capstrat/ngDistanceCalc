ngDistanceCalc
==============

Angular JS service that calculates the distance between two sets of coordinates

The service allows you to set two sets of coordinates and then request the distance between them in miles.
The coordinates are set by passing the set methods an object with lat and lng set.  { 'lat': _______, 'lng': ________ }.
Once point A and point B are set, you call the calculate() method to get the distance in miles.

```JavaScript
//Example controller

function testCtrl($scope, calculateDistance){

	var latlngA = {lat: 35.798412, lng: -78.727349},
	var latlngB = {lat: 34.0917739868, lng: -94.8893890381};

	calculateDistance.setPointA(latlngA);
	calculateDistance.setPointB(latlngB);

	alert( calculateDistance.calculate() );
}
```

