const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema;

const blogUsers = new userSchema({
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

blogUsers.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("invalid password");
    }
    throw Error("incorrect email");
  };

const users = mongoose.model('user',blogUsers);
module.exports = users;