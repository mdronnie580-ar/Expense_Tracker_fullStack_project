const express = require("express");
const Data = require("../models/Expensdata");
const router = express.Router()

// add data in the database
router.post("/add", async (req, res)=>{
        try{
            const {title, amount , category, date, description, userId} = req.body;

            // check all input are filled up or not
            if(!title || !amount || !category || !date || !userId){
                return res.status(400).json({
                    message:"please fill all are required fields",
                });
            }

            const data =  new Data({
                title,
                amount, 
                category,
                date,
                description,
                user: userId,
            })
            await data.save();

            res.status(201).json({
                message:"expsense added successfull",
                data,
            })

        }catch(err){
            return res.status(500).json({
                message:err.message,
            })
        }
});
// get data form database and sent to frontend
router.get("/", async (req, res)=>{
    try{
        const {userId} = req.query;
        if(!userId){
            return res.status(400).json({message:"user id is required"})
        }
        const expenses = await Data.find({user:userId});
        res.status(200).json(expenses);
    }catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
})
//delete data form database
router.delete("/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const expense = await Data.findByIdAndDelete(id);
        if(!expense){
            return res.status(404).json({
                message:"Expense not found",
            })
        }
        res.status(200).json({
            message: "Expense deleted successfully"
        })
    }catch(err){
        console.log(err);
    }
})
// edite and update 
router.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const {title , amount,category , date, description} = req.body;
        const updateExpense = await Data.findByIdAndUpdate(
            id, 
            {
            title,
            amount, 
            category,
            date, 
            description
        },
        {new:true}
    );
    res.status(200).json({updateExpense});

    }catch(err){
        console.log(err);
    }
})
module.exports = router