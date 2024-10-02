const express =require('express')
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const userRoute = require('./routes/UserRouter');
const hospitalRoute=require('./routes/HospitalRoute')

dotenv.config();
const PORT=process.env.PORT || 5000;
const MONGOURL=process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cors({
    origin:"*",
}));


mongoose.connect("mongodb://localhost:27017/healtech")
.then(()=>{
    console.log("Database connected");
    app.listen(PORT,()=>{console.log("Listening:"+PORT)})
})
.catch(err=>console.log(error))

app.use('/user',userRoute);
app.use('/hospital',hospitalRoute);