const express = require('express')
const app = express()
const http = require('http')
const httpServer = http.createServer(app)
const cors = require('cors')

app.set('port', process.env.PORT || 4000)

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
    credentials: true
  })
)
app.use(express.json())

// routes

app.use('/products', require('./routes/products.routes'))
app.use('/clients', require('./routes/clients.routes'))
app.use('/invoices', require('./routes/invoice.routes'))

async function main () {
  await httpServer.listen(app.get('port'))
  console.log('server on port ', app.get('port'))
}

main()
