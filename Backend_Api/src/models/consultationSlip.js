const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const consultationSlip = sequelize.define("consultationSlip",{
    dateEmission:{
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
    status: {
        type: DataTypes.STRING,
      },
      prix: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
});
module.exports = consultationSlip;