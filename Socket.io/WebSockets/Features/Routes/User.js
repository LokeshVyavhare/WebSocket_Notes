const express = require('express');
const User = require('../Modals/User.js');
const jwt = require('jsonwebtoken');

const app = express.Router();
app.use(express.json());

app.get('/', async(req, res)=>{
    try{
        let data = await User.find();
        res.send({data});
    }catch(err){
        res.send({error:true, message:err.message});
    }
})

app.post('/login', async(req, res)=>{
    const {email, password} = req.body;

    try{
        let user =await User.findOne({email, password});
        if(user){
            const token = jwt.sign({email, id:user._id}, process.env.JWT_Secret, {
                expiresIn:"3 days"
            })

            res.send({token})
            return
        }else{
            res.status(402).send({error:true, message:'Bad Creadentials'})
            return
        }
    }catch(err){
        res.status(401).send({error:true, message:err.message})
    }

})

app.post('/signup', async(req, res)=>{
    const {email, password, name} = req.body;
    const friends=[], blacklist=[], emailV=false;

    try{
        let oldUser = await User.findOne({email});
        if(oldUser){
            res.send({error:true, message:'Email Already in use'})
            return;
        }

        let newUser = await User.create({email, password, name, friends, blacklist, emailV});
        res.send({message:"User Created Successfully"});
    }catch(err){
        res.status(401).send({error:true, message:err.message})
    }
    
})

module.exports = app;