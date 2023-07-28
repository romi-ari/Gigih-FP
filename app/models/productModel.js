const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new mongoose.Schema({
    linkProduct: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    videoID: {
        type: Schema.Types.ObjectId,
        ref: "videoThumbnail"
    }
})

const product = mongoose.model('product', productSchema)

module.exports = product