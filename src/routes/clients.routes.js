const {
  Router
} = require('express')

const { getClients, getClient } = require('../controllers/clients.controller')

const router = Router()

router.route('/').get(getClients)

router.route('/:id').get(getClient)

module.exports = router
