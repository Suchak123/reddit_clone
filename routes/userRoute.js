import express from "express";
import { userSignUpController } from "../controllers/userController.js";

const router = express.Router();

router.get('/profile', (req,res) => {
    res.send("<h1>This is profile of the user</h1>")
})

router.post('/signup', userSignUpController);

export default router;