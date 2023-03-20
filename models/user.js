const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogUsers = new user({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
        lowercase: true
    },
    password:{
        type:String,
        required:true,
        minLength: [5,"minimum length 5 characters"]
    }
},
{timestamps:true}
);

blogUsers.pre("save",function(next){
    let user = this;
    bcrypt.genSalt(10, function (err, salt){
        if (err) next(err);
        bcrypt.hash(user.password, salt, function(err,hash){
            if (err) next(err);
            user.password = hash;
            next();
        });
    });
});