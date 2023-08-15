const { default: mongoose } = require('mongoose')
const productRepo = require('../repositories/productRepo')

module.exports = {

    async productList() {
        try {
            const product = await productRepo.findAll()
            
            return { product }
        } catch (error) {
            return {
                response: 404,
                msg: "Product not found",
                error: error.message,
            }
        }
    },

    async productListByVideoId(req) {
        try {
            const videoId = req.params.videoId
            const product = await productRepo.findById(videoId)

            return { product }
        } catch (error) {
            return {
                response: 404,
                msg: "Video thumbnail not found",
                error: error.message,
            }
        }
    },

    async createProduct(req) {
        try {
            const { title, price, urlImageThumbnailProduct, linkProduct, videoId  } = req.body

            if (!title || !price || !urlImageThumbnailProduct || !linkProduct || !videoId) {
                throw new Error("Make sure everything is filled in")
            }

            const product = await productRepo.create({
                title: title,
                price: price,
                urlImageThumbnailProduct: urlImageThumbnailProduct,
                linkProduct: linkProduct,
                videoId: videoId
            })

            return { product }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to create product",
                error: error.message,
            }
        }
    },

    async updateProduct(req) {
        try {
            const { title, price, urlImageThumbnailProduct, linkProduct, videoId } = req.body
            
            if (!title || !price || !urlImageThumbnailProduct ||!linkProduct || !videoId) {
                throw new Error("Make sure everything is filled in")
            }

            const product = await productRepo.update(req.params.id, {
                title: title,
                price: price,
                urlImageThumbnailProduct: price,
                linkProduct: linkProduct,
                videoId: videoId
            })

            return { product }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to update product",
                error: error.message,
            }
        }
    },
    async deleteProduct(req) {
        try {
            const id = req.params.id

            const product = await productRepo.delete({
                _id: id
            })

            return { product }
        } catch (error) {
            return {
                response: 400,
                status: "Fail",
                msg: "Failed to delete product",
                error: error.message,
            }
        }
    },
}