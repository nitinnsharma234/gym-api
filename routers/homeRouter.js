const express= require ("express");
const bodyPart = require("../models/body_parts");


homeRouter=express.Router();

homeRouter.get('/fetch',async (req,res,next)=>{

    const documents = await bodyPart.find();
    console.log(documents);
    res.status(200).json({documents});

})
homeRouter.get('/fetch/:id',async (req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    const documents = await bodyPart.findOne({_id:id});
    console.log(documents);
    res.status(200).json({documents});

})
module.exports=homeRouter;


