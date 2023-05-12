
const express = require("express");
const profile = require("../models/prod");


const router = express.Router();

router.get("/", async (req, res) => {
  try {
   
    const page = req.query.page || 1;
    const size = req.query.size || 6;
    const showArt=await profile.find()
    .skip((page -1)*size)
    .limit(size)
    .lean().exec();

    const totalPages = Math.ceil(
        (await profile.find().countDocuments())/size
    );

    return res.send({showArt,totalPages});

  }
  catch (err) {
      return res.status(500).send({ message: err.message })
  }
})


router.post("", async (req, res) => {
  try {
   
    let ofile = await profile.create(req.body)
    return res.status(200).send(ofile)
  }
  catch (err) {
      return res.status(500).send({ message: err.message })
  }
})

module.exports = router