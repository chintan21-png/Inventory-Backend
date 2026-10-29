import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        enum: ["Electronic", 'Grocery', 'Clothing', 'Stationery'],
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
    },
    // manufactureDate: {
    //     type: String,
    //     required: true
    // },

    // supplier:{
    //     name: {
    //         type: String,
    //     },
    //     phone: {
    //         type: String,
    //     }
    // },

    availability : {
        type: String,
        enum: ["Available", "Out of Stock"]
    }
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;