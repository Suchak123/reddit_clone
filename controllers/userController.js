import express from "express";
import userModel from "../models/userModel.js";
import { comparePassword, createToken, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";

export const userSignUpController = async (req,res) => {
    try {
        const { username, email, password, avatar } = req.body;
        if(!username){
            return res.send({message: "Username field is required!"});
        }
        if(!email) {
            return res.send({message: "Email field is required!"});
        }
        if(!password){
            return res.send({message: "Password is required!"});
        }

        const existingUser = await userModel.findOne({email});
        if(existingUser) {
            return res.status(200).send({
                success: true,
                message: "Already registered. Please login.",
            });
        }
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({
            username,
            email,
            password: hashedPassword,
            avatar
        }).save();

        return res.status(201).send({
            success: true,
            message: "User created successfully!"
        })
    } catch (error) {
        console.error("Error while signing up!", error);
    }
}

export const userLoginController = async (req,res) => {
    try {
       const {email, username, password} = req.body;
       if(!(username || email)){
        return res.status(404).send({
            success: false,
            message: "Username or email is required!"
        })
        }
        if(!password){
            return res.send(404).send({
                success: false,
                message: "Password is required!"
            })
        }
        const user = await userModel.findOne({ email });
        if(!user) {
            return res.status(401).send({
                success: false,
                message: "Email is not registered!",
            });
        }

        const matchedPassword = await comparePassword(password, user.password);
        if(!matchedPassword){
            return res.status(403).send({
                success: false,
                message: "Password does not match!",
            });
        }

        const token = createToken({ _id: user._id });
        return res.status(200).send({
            success: true,
            message: "User logged in successfully!",
            user: {
                email: user.email,
                username: user.username,
                password: user.password
            },
            token    
        })
        
        
    } catch (error) {
        console.error("Error while logging in!", error);
    }
}