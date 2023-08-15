const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 40,
    },
    comment: {
        type: String,
        required: true,
        maxLenght: 150,
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: "videoThumbnail",
        required: true,
    }
},  {timestamps: true})

const comment = mongoose.model('comment', commentSchema)

module.exports = comment