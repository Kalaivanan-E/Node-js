import express from 'express'
import Product from '../models/Product.js'

let router = express.Router()

router.get("/all",async(req,resp)=>{
    try{
        let products = await Product.find()
        return resp.status(200).json(products)
    }
    catch(err){
        return resp.status(500).json({"msg":err.msg})
    }
})

export default router