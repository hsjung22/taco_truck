myAppModule.factory('yelpFactory', function ($http) { 
	var factory = {};


	factory.request_yelp_tres = function (callback) {
		$http.get('/y_tres').success(function (output) {
			callback(output);
		})
	}

	return factory;
});