 angular.module('starter.services')
 .service('userView', function(userData){
 	var user = this;

 	user.data = userData;
 })