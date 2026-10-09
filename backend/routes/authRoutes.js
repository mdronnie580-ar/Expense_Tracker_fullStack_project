const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

router.post("/signup", async (req, res)=>{
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
          return   res.status(400).json({
                message:"All field are require",
            })
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"Email already exits",
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password:hashPassword,
        });
        res.status(201).json({
            message:"user created successfully",
            user:{
                id:user._id,
                name:user.name,
                password:password,
            }
        })

    }catch(err){
        res.status(500).json({
            message:"Server error",
        })
    }
})

// 
router.post("/login", async (req, res)=>{
    try{
        const {email, password} = req.body;
        // check fileds
        if(!email || !password){
            return res.status(400).json({
                message:"Email and password are require",
            });
        }

        // find user
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
            })
        }
        // compare password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(401).json({
                message:"invalid email or password",
            })
        }
        // login successfull 
        res.status(201).json({
            message:"Login successful",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            },
        })
    }catch(err){
        return res.status(500).json({
            message:"Email or password is wrong",
        })
    }
});
module.exports = router;