const {
  Router
} = require('express')

const { getInvoices, createInvoice, getInvoiceProducts } = require('../controllers/invoice.controller')

const router = Router()

router.route('/').get(getInvoices).post(createInvoice)

router.route('/invoice_product').get(getInvoiceProducts)

module.exports = router
