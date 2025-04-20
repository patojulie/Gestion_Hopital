const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const teleconsultation = sequelize.define("teleconsultation",{
    dateDebut:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    dateFin:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    urlVision:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});
module.exports = teleconsultation;