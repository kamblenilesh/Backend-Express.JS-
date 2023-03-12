const path = require('path');

const express = require('express');

// import controller
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);  // call controller & pass reference 'getProducts' function

module.exports = router;
