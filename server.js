var express = require("express");
var path = require("path");
var homeRoute = require("./routing/home.js")
var resRoute = require("./routing/res.js")


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", homeRoute)
app.use("/api", resRoute)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})