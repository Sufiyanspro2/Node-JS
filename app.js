import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { addNewBike, deleteBike, getAllBikes, getBikes, homePage, updateBike } from './Controllers/bike.controller.js';
import { register, login } from './Controllers/auth.controller.js';

// import router from './Routes/routes.js';

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

app.post('/register', register)
app.post('/login', login)

app.listen(process.env.PORT,()=>{
        console.log('server is runing on port: http://localhost:3000')
    })

mongoose.connect(process.env.MONGODB_CONNECTION).then(()=>{
    console.log('connected to db') 
}
).catch((err)=>{
    console.log("database connection failed", err)
})
// mongodb connection