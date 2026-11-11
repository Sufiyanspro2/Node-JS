import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    address:{
        type: String,
    },
    profile:{
        type: String
    },
},
{timestamps:true}
);

export const Users = mongoose.model('user', UserSchema)