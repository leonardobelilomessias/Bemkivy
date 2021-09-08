const sequelize = require("sequelize");
const conection = require("../database/database");



const User = conection.define('users',{
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    senha:{
        type:sequelize.STRING,
        allowNull:false
    },
    categoria:{
        type:sequelize.STRING,
        allowNull:true,
        defaultValue:'não definida'
    },
    avaliacao:{
        type:sequelize.FLOAT,
        allowNull:true,
        defaultValue:5
    },
    ativo:{
        type:sequelize.BOOLEAN,
        allowNull:true,
        defaultValue:0
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull:true,
        defaultValue:'não definido'
    }
})


User.sync({foce:true})
module.exports = User