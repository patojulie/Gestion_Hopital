const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const users = sequelize.define("users",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type:DataTypes.ENUM('admin','medecin','patient'),
        allowNull:true,
        defaultValue:'patient',
    },
    speciality:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:true
    }

});
module.exports = users;