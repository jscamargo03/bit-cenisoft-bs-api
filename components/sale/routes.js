const express = require('express')
const router = express.Router()
const {createSale, getSale, getSales, updateSale, deleteSale} = require('./actions')

// GET by ID
router.get('/:id', getSale)

// GET many sales
router.get('/', getSales)

// POST Create a Client
router.post('/', createSale)

// PUT Update a Client's info
router.put('/:id', updateSale)

// DELETE by ID
router.delete('/:id', deleteSale)

module.exports = router