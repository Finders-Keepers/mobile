angular.module('starter.controllers')
.controller('DashCtrl', function($scope, $interval, userView, mapData, $cordovaVibration) {
  var initMapBox = function(){
    // Provide your access token
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2FkYWpldHQiLCJhIjoiMWRlMGQ3NTA3NDdmM2EwOGIxMjZmMzFiZGNhOTEwOWYifQ.HhJd1UqbkiLNtCMrl4vqwg';
    // Create a map in the div #map
    $scope.mapInstance = L.mapbox.map('trackerMap', 'mapbox.streets');
    mapData.instance = $scope.mapInstance;
  }

  var init = function(){
  	$scope.locked = false;
  	initMapBox();
  }

  $scope.fakeStolen = function(){
  	if($cordovaVibration){
  		$cordovaVibration.vibrate([1000, 1000, 3000, 1000, 5000]);
  	}
  }

  // This should be in a directive, but this is a hackathon, so who cares. lol
  var resizeMap = function(){
  	
  	if($scope.mapContainer){
  		var container = {
	  		width: $scope.mapContainer.width(),
	  		height: $scope.mapContainer.height()
	  	};
  		if(container.width && container.height){
	  		if($scope.map){
	  			$scope.map.width(container.width);
	  			$scope.map.height(container.height);
	  			$scope.mapInstance.invalidateSize();
	  		}
	  	}
	  }else{
	  	bindMapElements();
	  }
  	
  }

  var bindMapElements = function(){
  	$scope.mapContainer = $('#mapContainer');
  	$scope.map = $('#trackerMap');
  }

  var loop = $interval(function(){
  	resizeMap();
  }, 200);

  $scope.toggleLock = function(){
  	$scope.locked = !$scope.locked;
  	if($scope.locked){
  		mapData.pins.bike.setIcon(mapData.icons.bikeLocked)	
  	}else{
  		mapData.pins.bike.setIcon(mapData.icons.bikeUnlocked)	
  	}
  	
  }

  init();
})