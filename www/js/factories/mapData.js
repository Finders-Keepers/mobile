angular.module('starter.services')
.factory('mapData', function(){
	__map = {
		instance: null,
		icons: {
			bikeLocked: L.icon({
			    iconUrl: 'img/lockPin.png',
			    iconSize:     [32.5, 50], // size of the icon
			    iconAnchor:   [17, 50] // point of the icon which will correspond to marker's location
			}),
			bikeUnlocked: L.icon({
			    iconUrl: 'img/unlockPin.png',
			    iconSize:     [32.5, 50], // size of the icon
			    iconAnchor:   [17, 50] // point of the icon which will correspond to marker's location
			})
		},
		pins: {
			bike: null,
			user: null
		}
	};



	// supposed to be private, but I am lazy lol
	return __map;
})