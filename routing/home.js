var express = require("express");
var router = express.Router();
var path = require("path");

router.use(function timelog(req, res, next){
    console.log("time: " , Date.now())
    next();
})

router.get("/make", function (req, res) {
    res.sendFile(path.resolve("./public/make.html"));
});

router.get("/view", function (req, res) {
    res.sendFile(path.resolve("./public/view.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.resolve("./public/home.html"));
});


module.exports = router;