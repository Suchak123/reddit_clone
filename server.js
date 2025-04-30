import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/v1/user", userRoute);

app.get("/", (req,res) => {
    res.send("<h1>Welcome to the node server of the reddit clone");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT ,() => {
    console.log(`Server running at port ${PORT}`);
})

