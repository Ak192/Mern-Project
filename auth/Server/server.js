const express= require('express');
const app= express();
const mongoose= require('mongoose');
const dotenv= require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('connected !'))
.catch(err=>console.log(err));

const PORT= process.env.PORT;
app.use(express.json());

app.use('/api/user',require('./routes/User_routes'));


app.listen(PORT,()=>{
    console.log('server start is',`${PORT}`);
});