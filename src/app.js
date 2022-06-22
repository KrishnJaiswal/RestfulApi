const express=require("express");
require("../src/db/conn")
const app=express();
const port = process.env.PORT||8000;
const MensRanking=require("../src/models/mens");
const router=require("../src/router/men")
app.use(express.json());
app.use(router);

// we will handle post request


// app.get("/",async(req,res)=>{
//     res.send("Hello from the server")
// })

app.listen(port,()=>{
    console.log(`connection is sucessful at port ${port}`);
})