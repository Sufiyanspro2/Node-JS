import {Bikes} from "../models/bikes.model.js"

export const getBikes = async(req, res)=>{
    const get_bikes = await Bikes.find();
    res.json({get_bikes})
}

export const addNewBike = async (req, res)=>{
    const newBike = await Bikes.insertOne(req.body)
    res.json({message:"created", newBike})
}

export const updateBike = async (req, res) =>{
    const {id} = req.params
    const body = req.body
    const updateBike = await Bikes.findByIdAndUpdate(id, body, {new:true, runValidators:true})
    if (!updateBike) {
        return res.status(404).json({message:"Bike not found"})
    }
    res.json(updateBike)

}

export const deleteBike = async (req, res)=>{
    const {id} = req.params
    const deletedBike = await Bikes.findByIdAndDelete(id)
    if (!deletedBike) {
        return res.status(404).json({message:"Bike not found"})
    }
    res.json({message:"Bikes deleted"})
}

export const getAllBikes = async (req, res)=>{
    const bikes = await Bikes.find()
    res.json({bikes})
}
export const homePage = (req, res) => {
    res.render('home')
}


