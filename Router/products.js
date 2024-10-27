const express = require('express')
const { getAllproducts } = require('../controllers/productController')
const verifyUser = require('../Middlewares/auth')
const router = express.Router()

router.get('/',verifyUser, getAllproducts)


module.exports=router