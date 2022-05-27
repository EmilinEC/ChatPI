const sequeLize = require('sequelize')

const conect  = new sequeLize('chatpi', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conect;