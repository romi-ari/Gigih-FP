const { videoThumbnailList, videoThumbnailListById, createVideoThumbnail, updateVideoThumbnail, deleteVideoThumbnail} = require('../services/videoThumbnailSvc')

module.exports = {

    videoThumbnailList(req,res) {
        videoThumbnailList(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    },

    videoThumbnailListById(req, res) {
        videoThumbnailListById(req).then(data => {
            if (data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    },

    createVideoThumbnail(req, res) {
        createVideoThumbnail(req).then(data => {
            if (data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    },

    updateVideoThumbnail(req, res) {
        updateVideoThumbnail(req).then(data => {
            if (data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    msg: "Update success"
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    },

    deleteVideoThumbnail(req, res) {
        deleteVideoThumbnail(req).then(data => {
            if (data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    msg: "Delete success"
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    }
}