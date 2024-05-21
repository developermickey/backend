const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send("Hye Its Working");
});

module.exports = router;