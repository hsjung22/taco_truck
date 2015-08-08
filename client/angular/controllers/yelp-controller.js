myAppModule.controller('yelpController', function ($scope, $location, $anchorScroll, yelpFactory){
	$scope.scrollTo = function(id){
		$location.hash(id);
		$anchorScroll();
	}

	yelpFactory.request_yelp_tres(function (data) {
		$scope.yelpDataTres = data;
	});

});


