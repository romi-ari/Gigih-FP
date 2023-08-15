const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    price: {
        type: String,
        required: true
    },
    urlImageThumbnailProduct: {
        type: String,
        required: true
    },
    linkProduct: {
        type: String,
        required: true
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: "videoThumbnail"
    }
})

const product = mongoose.model('product', productSchema)

module.exports = product