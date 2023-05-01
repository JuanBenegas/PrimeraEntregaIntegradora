import mongoose, { Schema, mongo } from "mongoose";

const prodsCollection = 'products'

const prodsSchema = new Schema({
    name: {type: Schema.Types.String, require: true},
    brand: {type: Schema.Types.String, require: true},
    description: {type: Schema.Types.String, require: true},
    price: {type: Schema.Types.Number, require: true},
    stock: {type: Schema.Types.Number, require: true},
    image: {type: Schema.Types.String, require: true},
    enable: {type: Schema.Types.Boolean, default: true}
})

export default mongoose.model(prodsCollection, prodsSchema)