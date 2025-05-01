import {Schema, model} from "mongoose";
import { type } from "os";

const userSchema = Schema({
    username: { 
        type: String, unique: true, required: true
    },  
    email: { 
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true
    },
    avatar: {
        type: String
    },
    joinedCommunities: [{ 
        type: Schema.Types.ObjectId, ref: 'Community'
    }],
}, {timestamps: true });

const User = model("User", userSchema);
export default User;