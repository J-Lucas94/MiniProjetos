const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '123456',{
    host: 'localhost',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso com o sequelize !')
// } catch (error) {
//     console.log('Não foi possivel conectar: ', error)
// }

module.exports = sequelize