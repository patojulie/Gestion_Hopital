const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const notification = sequelize.define("notification",{
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    message:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    destinataireType:{
        type:DataTypes.ENUM('caisse','patient','medecin','admin'),
        allowNull:false,
    },
    status: {
        type: DataTypes.STRING,
      },
});
module.exports = notification;