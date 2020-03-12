var express = require("express");
var app = express();
const PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log("private route hit!");
		next();
	}, 
	logger: function (req, res, next) {
		var date = new Date().toString();
		console.log("Request: " + req.method + " " + req.originalURL + " Zeit: " + date);
		next();
	}
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (req, res) {
	res.send("Hi, I´m Jones! What´s up?");
});

//app.use(express.static());
console.log(__dirname);

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
	console.log("Express server started on Port: " + PORT + "!");
});