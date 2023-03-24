const mongoose = require("mongoose");
const{ isEmail } = require("validator");
const Schema = mongoose.Schema;

const querySchema = new Schema(
  {
    names:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
  },
  {timestamps:true}
);

const Query = mongoose.model("Query",querySchema);
module.exports = Query;