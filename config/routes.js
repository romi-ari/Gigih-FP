const express = require('express')
const router = express.Router()

const { productCtrl, videoCtrl, commentCtrl} = require('../app/controllers/index')

//Video Routes
router.get('/video-thumbnail-list', videoCtrl.videoThumbnailList)
router.get('/video-thumbnail/:id', videoCtrl.videoThumbnailListById)
router.post('/video-thumbnail', videoCtrl.createVideoThumbnail)
router.put('/video-thumbnail/:id', videoCtrl.updateVideoThumbnail)
router.delete('/video-thumbnail/:id', videoCtrl.deleteVideoThumbnail)

//Product Routes
router.get('/product-list', productCtrl.productList)
router.get('/product-list/:videoId/', productCtrl.productListByVideoId)
router.post('/product', productCtrl.createProduct)
router.put('/product/:id', productCtrl.updateProduct)
router.delete('/product/:id', productCtrl.deleteProduct)

//Comment Routes
router.get('/comment-list', commentCtrl.commentList)
router.get('/comment-list/:videoId', commentCtrl.commentVideoListById)
router.post('/comment', commentCtrl.createComment)

module.exports = router