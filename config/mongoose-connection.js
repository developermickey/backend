const mongoose = require('mongoose');
const config = require('config');
const dbug = require('debug')("development:mongoose");


mongoose
.connect(`${config.get("MONGODB_URL")}/backend`)
.then(function(){
    dbug("connected");
})
.catch(function(err){
    dbug(err);
})


module.exports = mongoose.connection;