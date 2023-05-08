import ProductManager from "../dao/productManager.js"

export const getAll = async (req, res) => {
    try {
        const manager = new ProductManager()

        const products = await manager.find()
        res.send({ status: "Success", products })
    }
    catch (e) {
        throw new Error("I can't find products.", e)
    }
}

export const findOne = async (req, res) => {
    let { id } = req.params
    const manager = new ProductManager()
    const product = await manager.getOne(id)
    res.send({ status: "Success", product })
}

export const createOne = async (req, res) => {
    const manager = new ProductManager()
    let { name, brand, description, price, stock, image } = req.body
    if (!name || !brand || !description || !price || !stock || !image) return res.send({ status: "Error", status: "Incomplete items. Use -name, brand, description, price, stock, image-" })
    const products = await manager.create(req.body)
    res.send({ status: "Success", products })
}

export const updateOne = async (req, res) => {
    const manager = new ProductManager()
    let { id } = req.params
    let prodToReplace = req.body
    if (!prodToReplace.name || !prodToReplace.brand || !prodToReplace.description || !prodToReplace.price || !prodToReplace.stock || !prodToReplace.image) return res.send({ status: "Error", status: "Incomplete items. Use -name, brand, description, price, stock, image-" })
    let newProd = await manager.updateOne({ id }, prodToReplace)
    res.send({ status: "Success", newProd })
}

export const deleteOne = async (req, res) => {
    const manager = new ProductManager()
    let { id } = req.params
    let prodDelete = await manager.deleteOne({ _id: id })
    if (!prodDelete) return res.send({ status: "Error, this product doesn't exist" })
    res.send({ status: "Success - Product Delete" })
}