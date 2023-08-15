const commentRepo = require('../repositories/commentRepo')

module.exports = {

    async commentList() {
        try {
            const commentData = await commentRepo.findAll()
            
            return { commentData }
        } catch (error) {
            return {
                response: 404,
                msg: "Comment not found",
                error: error.message,
            }
        }
    },

    async commentVideoListById(req) {
        try {
            const videoId = req.params.videoId
            const comment = await commentRepo.findById(videoId)

            return { comment }
        } catch (error) {
            return {
                response: 404,
                msg: "Comment video by id not found",
                error: error.message,
            }
        }
    },

    async createComment(req) {
        try {
            const {username, comment, videoId} = req.body

            const commentData = await commentRepo.create({
                username: username,
                comment: comment,
                videoId: videoId
            })
            
            return { commentData }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to post comment",
                error: error.message,
            }
        }
    },
}