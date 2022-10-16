const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  try {
    let users = await Users.find();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500).json({ msg: "no users here" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// get single user
router.get("/:id", async (req, res) => {
    try {
        let _id = req.params.id;
      let user = await Users.findById({_id});
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(500).json({ msg: "no user here" });
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

// post user details
router.post("/", async (req, res) => {
    try {
        let user = new Users(req.body);
        if (user) {
          await user.save();
          res.status(200).json(user);
        } else {
          res.status(500).json({ msg: "invalid details" });
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// edit/update user
router.put("/:id", async (req, res) => {
    try {
        let _id = req.params.id;
      let user = await Users.findByIdAndUpdate({_id},{$set:req.body},{new:true});
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(500).json({ msg: "no user here" });
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  });


// delete user
router.delete("/:id", async (req, res) => {
    try {
        let _id = req.params.id;
      let user = await Users.findByIdAndDelete({_id});
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(500).json({ msg: "no user here" });
      }
    } catch (err) {
      res.status(500).json(err.message);
    }
  });


module.exports = router;
