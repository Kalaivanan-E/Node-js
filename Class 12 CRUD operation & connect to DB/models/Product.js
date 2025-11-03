
import mongoose from 'mongoose'

let productSchema= new mongoose.Schema({
    pname:{
        require:true,
        type: String,

    },
    price:{
        require: true,
        type : Number
    },
    qty:{
         require: true,
        type : Number
    },
    img:{
          require:true,
        type: String,
    },
    info:{
          require:true,
        type: String,
    }
})
    
let Product= mongoose.model("products",productSchema)

export default Product