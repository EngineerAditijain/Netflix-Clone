const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("../netflix-api/routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://Aditi:Aditi2002@cluster0.yg9hv8x.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connected successfully");
});


app.use("/api/user",userRoutes);

app.listen(5000,console.log("server started"));