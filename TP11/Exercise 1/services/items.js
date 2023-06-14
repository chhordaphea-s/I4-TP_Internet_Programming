const { items } = require('../models/items')
const create = async (params, req, res) => {
    const { name, description, category } = params

    try {
        const newItems = {
            name: name,
            description: description,
            category: category,
        }
        const addItem = await items.create(newItems)
        return res.status(200).json({
            status: 'true',
            message: 'Item created successful',
            data: addItem,
        })
    } catch (error) {}
}
const findById = async (params, req, res) => {
    const { _id } = params
    try {
        const findItemById = await items.findById({
            _id,
        })
        if (!findItemById) {
            throw 'Item is not found'
        } else {
            return res.status(200).json({
                status: 'true',
                message: 'Item found',
                data: findItemById,
            })
        }
    } catch (error) {
        return res.status(400).json({ status: 'false', message: error })
    }
}
const findAllItems = async (req, res) => {
    try {
        const findItem = await items.find({})
        return res
            .status(200)
            .json({ status: 'true', message: 'All items', data: findItem })
    } catch (error) {
        return res.status(400).json({ status: 'false', message: error })
    }
}

const findByCategory = async (params, req, res) => {
    const { category } = params

    try {
        const item = await items.find({ category: category })
        return res
            .status(200)
            .json({ status: 'true', message: 'All items', data: item })
    } catch (error) {
        return res.status(400).json({ status: 'false', message: error })
    }
}

const deleteItem = async (params, req, res) => {
    const { _id } = params
    try {
        await items.findByIdAndDelete({ _id: _id })
        return res
            .status(200)
            .json({ status: 'true', message: 'Items delete successful' })
    } catch (error) {
        return res.status(400).json({ status: 'false', message: error })
    }
}

const updateItem = async (params, req, res) => {
    const { _id, name, description, category } = params
    try {
        await items.findByIdAndUpdate(_id, {
            name: name,
            description: description,
            category: category,
        })
        return res
            .status(200)
            .json({ status: 'true', message: 'Update items successfully' })
    } catch (error) {
        return res.status(400).json({ status: 'false', error: error })
    }
}
module.exports = {
    create,
    findById,
    findAllItems,
    findByCategory,
    deleteItem,
    updateItem,
}
