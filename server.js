var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;

var middleware = require("./middleware.js");

app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (req, res) {
	res.send("Hi, I´m Jones! What´s up?");
});

console.log(__dirname);

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
	console.log("Express server started on Port: " + PORT + "!");
});