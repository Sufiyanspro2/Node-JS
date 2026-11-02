import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { addNewBike, deleteBike, getAllBikes, getBikes, homePage, updateBike } from './Controller/bike.controller.js';
dotenv.config();
const app = express()

app.use(express.json())  // req body == json()
app.use(express.urlencoded()) // req.body == form
app.set('view engine', 'ejs') // view 
app.use(express.static('public')) // static

app.get('/', homePage)

app.post('/', addNewBike)
app.get('/bikes', getAllBikes)
app.put('/bikes/:id', updateBike)
app.delete('/bikes/:id', deleteBike)

app.listen(process.env.PORT,()=> {
    console.log('running')
})//server json
mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>
    console.log('connected to db'))
.catch((err)=>
    console.log("database connection failed", err))
// mongodb connection