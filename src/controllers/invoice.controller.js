const { connection } = require('../database')

const invoiceCtrl = {}

invoiceCtrl.getInvoices = async (req, res) => {
  console.log('getProducts')
  try {
    connection.query('SELECT * from invoice', (error, result) => {
      if (error) throw error

      res.json(result)
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

invoiceCtrl.getInvoice = async (req, res) => {
  console.log('getProducts')

  const { invoiceId } = req.body
  try {
    connection.query(`SELECT * from invoice WHERE invoiceId = ${invoiceId}`, (error, result) => {
      if (error) throw error

      res.json(result)
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

invoiceCtrl.createInvoice = async (req, res) => {
  console.log(req.body)
  const { date, subtotal, discount, total, clientId, products } = req.body

  const aux = (`"${date}"`)

  console.log(aux)
  try {
    console.log('inicio')
    connection.query(`INSERT INTO invoice (date , subtotal, discount , total, clientId) VALUES (${aux} , ${subtotal} , ${discount} , ${total} , ${clientId})`, function (error, results, fields) {
      if (error) throw error
      console.log(results.insertId)

      products.forEach(item => {
        connection.query(`INSERT INTO invoice_product (invoiceId , productId , quantity) VALUES(${results.insertId}, ${item.product.idProduct}, ${item.quantity})`)
      })
    })

    console.log('final')

    res.status(200).json({ message: 'a' })

    // connection.query(`INSERT INTO invoice_product (invoiceId, productId, quantity) VALUES(LAST_INSERT_ID(), 1, 1)`)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

invoiceCtrl.getInvoiceProducts = async (req, res) => {
  try {
    connection.query('SELECT * from invoice_product', (error, result) => {
      if (error) throw error

      res.json(result)
    })
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}

invoiceCtrl.getInvoiceProductsPerId = async (req, res) => {
  try {
    connection.query(`SELECT * FROM invoice_product WHERE invoiceId = ${req.params.id}`, (error, result) => {
      if (error) throw error

      res.json(result)
    })
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}

module.exports = invoiceCtrl
