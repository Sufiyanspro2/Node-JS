import { Users } from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const register = async (req, res)=> {
    const user = req.body;
    if(user.username == '' || user.email == '' || user.password == ''){
        return res.status(400).json({message: 'please provide username email or password'})
    }
    const findUser = await Users.findOne({email: user.email})
    if(findUser){
        return res.status(403).json({message: 'email already exist'})
    }
    console.log(user.password)
    const hashPassword = await bcrypt.hash(user.password, 10);
    console.log(hashPassword);
    const newUser = await Users.create({...user, password:hashPassword})
    return res.status(201).json({message: 'user created sucessfully', newUser})
}

export const login = async (req, res) =>{
    const {email, password} = req.body;
    const findUser = await Users.findOne({email});
    if(!findUser){
        return res.status(404).json({message: 'user not found'})
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if(!isMatch){
        return res.status(401).json({message: 'invalid credentials'})
    }
    return res.status(200).json({message: 'login successful', user: findUser})
}
