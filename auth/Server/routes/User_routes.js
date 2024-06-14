const express= require('express');
const { Signup } = require('../Controllers/User_controllers');
const router= express.Router();

router.post('/registration',Signup);
module.exports= router;