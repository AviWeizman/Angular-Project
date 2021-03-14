const mongoose = require('mongoose');

let userSchema = mongoose.Schema;

let UserSchema = new userSchema({
    name : String,
    email : String,
    street : String,
    zipcode : Number,
    tasks : [{id : Number , title : String, comleted : Boolean}],
    posts : [{id : Number , title : String , body: String}]


});

module.exports =  mongoose.model('users',UserSchema)

