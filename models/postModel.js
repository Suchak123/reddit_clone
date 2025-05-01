import {Schema, model} from "mongoose";
import { type } from "os";

const postSchema = Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    imageUrl: { 
        type: String 
    },
    videoUrl: { 
        type: String 
    },
    url: { 
        type: String 
    },
    createdBy: [{ 
        type: Schema.ObjectId, ref: "User"
    }]
})
const Post = model("Post", postSchema)
module.exports = Post