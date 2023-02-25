const express = require("express");
const router = express.Router();

const Organ = require("../models/organmodel")

router.get('/getallorgans' , async(req,res) => {
    try{
        const organs = await Organ.find();
        res.sen(organs);
    }catch (error){

        return res.status(400).json(error);
    }   
  
});

router.post("/adddonor", async (req, res) => {
    try {
      const neworgan = new Organ(req.body);
      await neworgan.save();
      res.send("Organ added successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  router.post("/editorgan", async (req, res) => {
    try {
      const organ = await Organ.findOne({ _id: req.body._id });
        organ.id = req.body.id;
        organ.name = req.body.name;
        organ.organ = req.body.organ;
        organ.donationdate = req.body.donationdate;
        organ.expirydate = req.body.expirydate;
        organ.donorage = req.body.donorage;
        
      await organ.save();
  
      res.send("Organ details updated successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });