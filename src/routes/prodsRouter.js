import { Router } from "express";
import prodsSchema from '../dao/models/prods.model.js'

const prodsRouter = Router() 

prodsRouter.get('/', async (req, res) => {
    try{
        const products = await prodsSchema.find()
        res.send({status: "Success", products})
    }
    catch(e){
        throw new Error("I can't find products.", e)
    }
})

prodsRouter.post('/', async (req, res) => {
    try{
        const product = await prodsSchema.create(req.body)
        res.send({status: "Success", product})
    }
    catch{
        res.send({status: "Items incomplete"})
    }
})

export default prodsRouter