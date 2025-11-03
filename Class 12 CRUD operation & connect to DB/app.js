
import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routes/productRouter.js';

// express app
const app = express();

dotenv.config({'path':'./config/dev.env'})
let port=process.env.PORT;
let host=process.env.HOST;
let mongo_db_url=process.env.MongoDB_LOCAL_URL;


// Read form Data
app.use(express.json());

// HTTp logger middleware
app.use(morgan('dev'))

//enable cors
app.use(cors())

//Application Root Request 
app.get("/",(req,resp)=>{
    resp.status(200).json({"msg":"Application Root Request"})
})


app.use("/Product",productRouter)


// mongodb connection
mongoose.connect(mongo_db_url,{})
    .then((resp)=>{
        console.log("Mongo DB connected successfully")
    })
    .catch((err)=>{
        console.error(err)
        process.exit(1)
    })

app.listen(port, host, (err)=>{
    if(err) throw err
    console.log(`server running http://${host}:${port}`)
})