const { connection } = require('../database')

const productsCtrl = {}

productsCtrl.getProducts = async (req, res) => {
  console.log('getProducts')
  try {
    await connection.query('SELECT * from products', (error, result) => {
      if (error) throw error

      res.json(result)
    })
  } catch (error) {
    res.status(500).json({ message: 'a' })
  }
}

module.exports = productsCtrl
