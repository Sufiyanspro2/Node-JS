import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

export const Bikes = mongoose.model('bike', BikeSchema)