const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const payment = sequelize.define("payments",{
    amount:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false,
    },
    date:{
        type:DataTypes.DATE,
    },
    mainPayment:{
        type:DataTypes.STRING,
        allowNull:false,
    },

});
module.exports = payment;