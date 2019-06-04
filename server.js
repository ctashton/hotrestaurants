var express = require("express");
var path = require("path");
var homeRoute = require("./routing/home.js")


var app = express();
var PORT = process.env.PORT || 3000;

app.use("/", homeRoute)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})