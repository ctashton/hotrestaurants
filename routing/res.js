var express = require("express");
var router = express.Router();
var path = require("path");
var data = require("./data/data.js")

router.use(function timelog(req, res, next){
    console.log("time: " , Date.now())
    next();
})

router.get("api/res", function(req, res) {

    return res.json(data.reservations)
})

router.get("api/waitlist", function(req, res) {
    return res.json(waitlist)
})

router.post("/api/res", newTable)
.then(function(data) {
  console.log("make.html", data.reservation);
});

module.exports = router;