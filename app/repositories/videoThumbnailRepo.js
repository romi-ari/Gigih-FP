const videoThumbnail = require('../models/videoThumbnailModel')

module.exports = {

    findAll() {
        try {
            return videoThumbnail.find()
        } catch (error) {
            throw new Error("Data not found") 
        }
    },

    findById(id) {
        try {
            return videoThumbnail.findById({_id:id})
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    create(Args) {
        try {
            return videoThumbnail.create(Args)
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    update(id, Args) {
        try {
            return videoThumbnail.updateOne({ _id: id }, Args)
        } catch (error) {
            throw new Error("Failed update data to database", error)
        }
    },

    delete(id) {
        try {
            return videoThumbnail.deleteOne({ _id: id })
        } catch (error) {
            throw new Error("Failed delete data to database", error)
        }
    }
} 