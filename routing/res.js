var express = require("express");
var router = express.Router();
var path = require("path");
var data = require("../data/data.js")

router.use(function timelog(req, res, next){
    console.log("time: " , Date.now())
    console.log(data)
    next();
})

router.get("/res", function(req, res) {
    return res.json(data.reservations)
})

router.get("/waitlist", function(req, res) {
    return res.json(waitlist)
})

router.post("/res", function(req, res) { 
     var newRes = req.body;

     console.log(newRes)
    
    data.push(newRes);

    res.sendFile(path.resolve("./public/view.html"));
    
    // console.log("make.html", data.reservation);
})

module.exports = router;