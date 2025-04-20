const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const accesAutorisation = sequelize.define("accesAutorisation",{
    dateAutorisation:{
        type:DataTypes.DATE,
        allowNull:false,
    },
});
module.exports = accesAutorisation;