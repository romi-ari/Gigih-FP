const { productList, productListByVideoId, createProduct, updateProduct, deleteProduct  } = require('../services/productSvc')

module.exports = {

    productList(req,res) {
        productList(req).then(data => {
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

   productListByVideoId(req, res) {
       productListByVideoId(req).then(data => {
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

    createProduct(req, res) {
        createProduct(req).then(data => {
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

    updateProduct(req, res) {
        updateProduct(req).then(data => {
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

    deleteProduct(req, res) {
        deleteProduct(req).then(data => {
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
    },
}