const {
  Router
} = require('express')

const { getInvoices, createInvoice, getInvoiceProducts, getInvoiceProductsPerId } = require('../controllers/invoice.controller')

const router = Router()

router.route('/').get(getInvoices).post(createInvoice)

router.route('/:id').get(getInvoiceProductsPerId)

router.route('/invoice_product').get(getInvoiceProducts)

module.exports = router
