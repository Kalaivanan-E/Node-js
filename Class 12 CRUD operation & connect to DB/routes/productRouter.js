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
/*
usage:update product by _id: ie mongodb Product _id
URL:http://127.0.0.8080/product/update/6908a276ad5558da8ec60ae7
Method:PUT
Required Fields:pname,price,image,qty,info
Access Type:Public
*/
router.put("/update/:id",async (req,resp)=>{
    try{
        let product_Id=req.params.id;
        console.log(product_Id);
        //verify product exits or using mongodb product id;
        let product=await ProductModel.findById(product_Id)
        console.log(product)

        if(!product){
            return resp.status(404).json({"msg":"Product Not Exits"})
        }
        //if proudct exits
        let updated_Product_data=req.body;
        console.log(updated_Product_data);
        product=await ProductModel.findByIdAndUpdate(product_Id,updated_Product_data)
        return resp.status(200).json({"msg":"Product Updated Successfully"})
        
    }
     catch(err){
        return resp.status(500).json({'msg':err.msg})
    }
})
export default router