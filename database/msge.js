const sequelize = require('sequelize');

const connection = require('./conexão');


const text = connection.define('mensagens',{
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    msg:{
        type: sequelize.TEXT,
        allowNull: false,
    }
})

text.sync({force:false}).then(()=>{console.log('Tabela Criada')}).catch(()=>{console.log('Falha')})
module.exports = text