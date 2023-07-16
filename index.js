const express = require("express");
const mongoose =require("mongoose");
const userRouter = require("./routers/userRouter");
const homeRouter = require("./routers/homeRouter");



const app = express();

app.use(express.json());

//app.use('/user',userRouter);
app.use('/part',homeRouter);
app.use('/',(req,res,next)=>{
    res.send("alfjajaj");
})
//app.listen(3000, () => console.log('Its working on port 3000'));

mongoose.connect("mongodb+srv://admin:bouQPSnKZMgrgyHM@cluster0.qgvz3dr.mongodb.net/").then((db)=>
console.log("ok"),
app.listen(8000,(port )=>{
    console.log("Connected to Server")
})

)
.catch(err=>console.log(err))