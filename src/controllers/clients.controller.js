const { connection } = require('../database')

const clientsCtrl = {}

clientsCtrl.getClients = async (req, res) => {
  try {
    await connection.query('SELECT * from clients', (error, result) => {
      if (error) throw error

      res.json(result)
    })
  } catch (err) {

  }
}

clientsCtrl.getClient = async (req, res) => {
  try {
    await connection.query(`SELECT * FROM clients WHERE idClient = ${req.params.id} `)
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}

module.exports = clientsCtrl
