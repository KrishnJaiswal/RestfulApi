const express=require("express");
const router=new express.Router();
const MensRanking=require("../models/mens")
router.post("/mens",async(req,res)=>{
    try{
        const addingData=new MensRanking(req.body);
        const insertData=await addingData.save();
        console.log(req.body);
        res.status(201).send(insertData);
    }catch(e){
        res.status(400).send(e);
        
    }
});

// reading the data
router.get("/mens",async(req,res)=>{
  try{
      const getMens=await MensRanking.find({}).sort({"ranking":1})

      res.status(201).send(getMens);
  }catch(e){
      res.status(400).send(e);
      
  }
});

// reading the data for individual
router.get("/mens/:id",async(req,res)=>{
  try{
      const _id=req.params.id;
      const getMen=await MensRanking.findById(_id)

      res.status(201).send(getMen);
  }catch(e){
      res.status(500).send(e);
      
  }
});
// handling patch request
router.patch("/mens/:id",async(req,res)=>{
  try{
      const _id=req.params.id;
      const updateMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
          new:true
      })

      res.status(201).send(updateMen);
  }catch(e){
      res.status(500).send(e);
      
  }
})
// deleting the data
router.delete("/mens/:id",async(req,res)=>{
  try{
      const _id=req.params.id;
      const deleteMen=await MensRanking.findByIdAndDelete(_id)

      res.status(201).send(deleteMen);
  }catch(e){
      res.status(500).send(e);
      
  }
})


module.exports=router;