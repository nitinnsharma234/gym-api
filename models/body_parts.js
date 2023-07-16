const mongoose = require("mongoose");

const BodyPart = mongoose.Schema({
    bodypart:{
        type:String,
        required:true
    },
    exercises:{
        type:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'exercises' // Reference the Exercise model
          }]
    }
   
},{timestamps:true});

const bodyPart= mongoose.model("body_parts",BodyPart);

module.exports=bodyPart;
