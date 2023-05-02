import { Router } from "express";
import prodsSchema from '../dao/models/prods.model.js'
import ProductManager from "../dao/productManager.js";

const prodsRouter = Router()
const manager = new ProductManager

prodsRouter.get('/', async (req, res) => {
    try {
        const products = await prodsSchema.find()
        res.send({ status: "Success", products })
    }
    catch (e) {
        throw new Error("I can't find products.", e)
    }
})

prodsRouter.get('/:id', async (req, res) => {
    try{
        let {id} = req.params
        const product = await prodsSchema.findOne({_id: id})
        res.send({ status: "Success", product })
    }
    catch{

    }
})

prodsRouter.post('/', async (req, res) => {
    try {
        let { name, brand, description, price, stock, image } = req.body
        if (!name || !brand || !description || !price || !stock || !image) return res.send({ status: "Error", status: "Incomplete items. Use -name, brand, description, price, stock, image-" })
        const product = await prodsSchema.create(req.body)
        res.send({ status: "Success", product })
    }
    catch {
        res.send({ status: "Items incomplete" })
    }
})

export default prodsRouter