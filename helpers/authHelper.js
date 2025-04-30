import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log("Error while hashing the password",error);
    }
}

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

export const createToken = async (id) => {
    return jwt.sign({ _id: id}, 
        process.env.JWT_SECRET, {
            expiresIn: "30d",
        }
    )
}