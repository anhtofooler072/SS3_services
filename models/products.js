import { Schema } from "mongoose";
import mongoose from "mongoose";

const productSchema = new Schema({
    name: String,
    type: String,
    cost: Number,
    old_cost: Number,
    discount: String,
    images: {
        type: Object,
        default: {}
    },
    sizes : {
        type: Object,
        default: {}
    },
    description: String,
    reviews: {
        type: Array,
        default: []
    },
    rating: Number,
    origin: String,
    hide: {
        type: Boolean,
        default: true
    }
    });

const productModel = mongoose.model("Products", productSchema);

export default productModel;