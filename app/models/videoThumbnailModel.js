const mongoose = require('mongoose')

const videoThumbnailSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    urlVideo: {
        type: String, 
        required: true, 
    },
    urlImageThumbnail: {
        type: String,
        required: true,
    },
})

const videoThumbnail = mongoose.model('videoThumbnail', videoThumbnailSchema)

module.exports = videoThumbnail