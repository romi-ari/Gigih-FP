const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    videoID: {
        type: Schema.Types.ObjectId,
        ref: "videoThumbnail"
    }
},  {timestamps: true})

const comment = mongoose.model('comment', commentSchema)

module.exports = comment