var yelp = require("yelp").createClient({
  consumer_key: "TsKEoNmeXCcIs4UBET1MYA", 
  consumer_secret: "HVxC83_RInvfANbwkB2uhlNjxAM",
  token: "9_xUadGxWvqJVDKJUqM7n-GhlMXyeH72",
  token_secret: "h6kiu3G8xHzOClf-T_Ar4fkFYJg"
});


module.exports = function(app){



	app.get("/y_tres", function(req, res){
		

			yelp.business("tacos-los-tres-reyes-san-jose", function(error, data) {
			  res.json(data);
			});


	});


}
