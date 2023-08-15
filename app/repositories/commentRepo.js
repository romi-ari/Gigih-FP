const comment = require('../models/commentModel')

module.exports = {

    findAll() {
        try {
            return comment.find()
        } catch (error) {
            throw new Error("Data not found") 
        }
    },

    findById(videoId) {
        try {
            return comment.find({videoId:videoId})
        } catch (error) {
            throw new Error("Data not found")
        }
    },

    create(Args) {
        try {
            return comment.create(Args)
        } catch (error) {
            throw new Error("Failed to create") 
        }
    },
} 