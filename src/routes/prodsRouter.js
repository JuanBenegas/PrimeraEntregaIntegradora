import { Router } from "express";
// import prodsSchema from '../dao/models/prods.model.js'
// import ProductManager from "../dao/productManager.js";
import { createOne, deleteOne, findOne, getAll, updateOne } from "../controllers/productsController.js";

const prodsRouter = Router()

prodsRouter.get('/', getAll)

prodsRouter.get('/:id', findOne)

prodsRouter.post('/', createOne)

prodsRouter.put('/:id', updateOne)

prodsRouter.delete('/:id', deleteOne)

export default prodsRouter


