const sequelize = require("sequelize");
const conection = new sequelize('bemkivy','root','',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
})

module.exports = conection;