const Sequelize = require('sequelize');

//Conexão com o banco de dados MySql
const sequelize = new Sequelize('pokelista', 'root', 'amocafe',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


//colorcar no git comiit seprando modeules por aqrquivos