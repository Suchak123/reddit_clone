import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB ${connection.connection.host}`);
        
    } catch (error) {
        console.log(`Error in mongodb connection ${error}`.bgRed.white);
    }
}

export default connectDB;
