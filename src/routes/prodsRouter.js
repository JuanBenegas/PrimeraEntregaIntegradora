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

prodsRouter.put('/:id', async (req, res) => {
    try {
        let {id} = req.params
        let prodToReplace = req.body
        if (!prodToReplace.name || !prodToReplace.brand || !prodToReplace.description || !prodToReplace.price || !prodToReplace.stock || !prodToReplace.image) return res.send({ status: "Error", status: "Incomplete items. Use -name, brand, description, price, stock, image-" })
        let newProd = await prodsSchema.updateOne({_id: id}, prodToReplace)
        res.send({ status: "Success", newProd })
    }
    catch {
        res.send({ status: "Items incomplete" })
    }
})

prodsRouter.delete('/:id', async (req, res) => {
    try {
        let {id} = req.params
        let prodDelete = await prodsSchema.deleteOne({_id: id})
        if (prodDelete.deletedCount == 0) return res.send({ status: "Error, this product doesn't exist" })
        res.send({ status: "Success - Product Delete" })
    }
    catch {
        res.send({ status: "Error" })
    }
})

export default prodsRouter