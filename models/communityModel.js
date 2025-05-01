import {Schema, model} from "mongoose";

const communitySchema = Schema({
    name: { 
        type: String, unique: true,required: true
    },
    description: { 
        type: String, required: true
    },
    members: [{ 
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    moderators: [{ 
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    genre: { 
        type: String 
    },
}, {timestamps: true});

const Community = model('Community', communitySchema);
module.exports = Community