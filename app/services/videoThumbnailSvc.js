const videoThumbnailRepo = require('../repositories/videoThumbnailRepo')

module.exports = {

    async videoThumbnailList() {
        try {
            const video = await videoThumbnailRepo.findAll()
            
            return { video }
        } catch (error) {
            return {
                response: 404,
                msg: "Video thumbnail not found",
                error: error.message,
            }
        }
    },

    async videoThumbnailListById(req) {
        try {
            const id = req.params.id
            const video = await videoThumbnailRepo.findById(id)

            return { video }
        } catch (error) {
            return {
                response: 404,
                msg: "Video thumbnail not found",
                error: error.message,
            }
        }
    },
    
    async createVideoThumbnail(req) {
        try {
            const {title, urlVideo, urlImageThumbnail } = req.body

            if (!title || !urlVideo || !urlImageThumbnail) {
                throw new Error("Make sure everything is filled in")
            }
            
            const video = await videoThumbnailRepo.create({
                title: title,
                urlVideo: urlVideo, 
                urlImageThumbnail: urlImageThumbnail,
            })

            return { video }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to create video thumbnail",
                error: error.message,
            }
        }
    },

    async updateVideoThumbnail(req) {
        try {
            const { title, urlVideo, urlImageThumbnail } = req.body

            if (!title || !urlVideo || !urlImageThumbnail) {
                throw new Error("Make sure everything is filled in")
            }

            const video = await videoThumbnailRepo.update(req.params.id, {
                title: title,
                urlVideo: urlVideo,
                urlImageThumbnail: urlImageThumbnail,
            })

            return { video }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to create video thumbnail",
                error: error.message,
            }
        }
    },

    async deleteVideoThumbnail(req) {
        try {
            const id = req.params.id

            const video = await videoThumbnailRepo.delete({
                _id: id
            })

            return { video }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to delete video thumbnail",
                error: error.message,
            }
        }
    },
}