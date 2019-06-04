var express = require("express");
var router = express.Router();
var path = require("path");

router.use(function timelog(req, res, next){
    console.log("time: " , Date.now())
    next();
})

router.get("api/res", function(req, res) {

})

router.get("api/waitlist", function(req, res) {
    
})

module.exports = router;