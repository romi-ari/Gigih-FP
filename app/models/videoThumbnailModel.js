const mongoose = require('mongoose')

const videoThumbnailSchema = new mongoose.Schema({
    urlImageThumbnail: {
        type: String,
        required: true
    },
})

const videoThumbnail = mongoose.model('videoThumbnail', videoThumbnailSchema)

module.exports = videoThumbnail