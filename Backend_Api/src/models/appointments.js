const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const appointment = sequelize.define("appointments",{
    date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },

});
module.exports = appointment;