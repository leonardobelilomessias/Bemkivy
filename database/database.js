const sequelize = require("sequelize");
const conection = new sequelize('bemkivy_mvp','root','',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
})

module.exports = conection;