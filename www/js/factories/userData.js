angular.module('starter.services')
.factory('userData', function($log, mapData){
	// private api
	var __user = {
		username: '',
		location: null,
		bikeInfo: null,
		loadingLoc: true
	};

	var init = function(){
		user.location.pull();
	};

	// public api
	var user = {
		username: {
			set: function(name){
				__user.username = name;
			},
			get: function(){
				return __user.username;
			}
		},
		location: {
			set: function(location){
				__user.location = location;
			},
			get: function(){
				return __user.location;
			},
			pull: function(){
				var self = user.location;
				navigator.geolocation.getCurrentPosition(function(pos){
					var crds = pos.coords;
					self.set(crds);
					$log.info('users coords: ', crds);
					__user.loadingLoc = false;
					mapData.instance.setView([crds.latitude, crds.longitude], 18);
					mapData.pins.user = L.marker([crds.latitude, crds.longitude]).addTo(mapData.instance);
					mapData.pins.bike = L.marker([crds.latitude + .001, crds.longitude], {icon: mapData.icons.bikeUnlocked}).addTo(mapData.instance);
				}, function(){
					__user.loadingLoc = false;
				})
			}
		},
		loadingLoc: {
			get: function(){
				return __user.loadingLoc;
			}
		}
	};


	init();
	return user;
});