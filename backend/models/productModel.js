const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"],
    },
    description: {
        type: String,
        required: [true, "please enter product description"],

    },
    price: {
        type: Number,
        required: [true, "please enter product price"],
        maxLength: [6]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product category"],
    },
    Stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"stock cannot exceed more then 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    user:{

    },

    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;