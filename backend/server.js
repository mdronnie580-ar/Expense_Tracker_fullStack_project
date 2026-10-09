const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const expensRoutes = require('./routes/expenseRoutes');
const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/expense", expensRoutes);;
// connect mongoDB
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connect")
})
.catch(err=>{
    console.log(err);
})
app.get("/",(req, res)=>{
    res.send("Server is running")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running port = ${PORT}`)
})