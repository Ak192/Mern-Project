const mongoose= require('mongoose');
const  Usermodel= require('../Models/User_Models');

const Signup= async(req,res)=>{
    const {Name,Email,Password}=req.body;
    try{
        if(!Name||!Email||!Password){
            return res.status(404).json('all field mendetory');
        }
        const Newuser= new Usermodel({Name,Email,Password});
      await  Newuser.save();
    return  res.status(200).json('user registred successfully !');

    }
    catch(err){
        return res.status(400).json(err);
        console.log(err);
    }
};

module.exports={Signup};