const commentRepo = require('../repositories/commentRepo')

module.exports = {

    async commentList() {
        try {
            const listComment = await commentRepo.findAll()
            
            return { listComment }
        } catch (error) {
            return {
                response: 404,
                msg: "Comment not found",
                error: error.message,
            }
        }
    },

    async createComment(req) {
        try {
            const {username, comment, videoID} = req.body

            const commentData = await commentRepo.create({
                username, comment, videoID
            })
            
            return { commentData }
        } catch (error) {
            return {
                response: 404,
                status: "Fail",
                msg: "Failed to post comment",
                error: error.message,
            }
        }
    }
}