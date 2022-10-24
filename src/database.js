const mysql = require('mysql')

require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: 'clavesegura03'
})

// connection.connect(function (error) {
//   if (error) {
//     throw error
//   } else {
//     console.log('Conexion exitosa')
//   }
// })

// connection.query('SELECT * from products', function (error, results, fields) {
//   if (error) throw error

//   results.forEach(Element => console.log(Element))
// })
// connection.end()
// const getConnection = () => connection

module.exports = {
  connection
}
