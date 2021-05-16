const router = require("express").Router();
const e = require("express");
const Product = require("../models/Product");
const User = require("../models/User");


// router.get("/", (req, res)=>{
//     res.send("Welcome to the Store");
//     console.log("Welcome to Store")
// })

//create a product

router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //update a product
  
  router.put("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product.userId === req.body.userId) {
        await product.updateOne({ $set: req.body });
        res.status(200).json("the product has been updated");
      } else {
        res.status(403).json("you can update only your product");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //delete a product
  
  router.delete("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product.userId === req.body.userId) {
        await product.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your product");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //like / dislike a post
  
  router.put("/:id/bid", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if(req.body.userId !== product.userId){
        if (!product.bids.includes(req.body.userId)) {
            await product.updateOne({ $push: { bids: req.body.userId } });
            res.status(200).json("The have made a bid");
        } else {
            await product.updateOne({ $pull: { bids: req.body.userId } });
            res.status(200).json("The have withdrawn you bid");
        }
      }
      else{
          res.status(403).json("You can not bid this product");
      }
     
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get a post
  
  router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // get timeline posts
  
  router.get("/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userProducts = await Post.find({ userId: currentUser._id });
     
      res.status(200).json(userProducts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  router.get("/", async (req, res) => {
    try {
      // const currentUser = await User.findById(req.params.userId);
      const products = await Product.find();
     
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//   //get user's all posts
  
//   router.get("/profile/:username", async (req, res) => {
//     try {
//       const user = await User.findOne({ username: req.params.username });
//       const posts = await Post.find({ userId: user._id });
//       res.status(200).json(posts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router;