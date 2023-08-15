const product = require('../models/productModel')

module.exports = {

    findAll() {
        try {
            return product.find()
        } catch (error) {
            throw new Error("Data not found", error) 
        }
    },

    findById(videoId) {
        try {
            return product.find({videoId:videoId})
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    create(Args) {
        try {
            return product.create(Args)
        } catch (error) {
            throw new Error("Failed create data to database", error)
        }
    },

    update(id, Args) {
        try {
            return product.updateOne({_id:id}, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return product.deleteOne({_id:id})
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 