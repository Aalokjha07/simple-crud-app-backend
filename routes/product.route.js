const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {addReport , deleteReport, getReports, getReport, deleteReport} = require('../controllers/product.controller.js');


router.get('/' , getReports);

router.get('/:id', getReport);


router.post('/' , addReport);

// router.put('/:id' , updateProduct);

router.delete('/:id' , deleteReport);

module.exports = router ; 