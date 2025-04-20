const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const medicalRecord = sequelize.define("medicalRecords",{
     
    antecedents: {
        type: DataTypes.TEXT,
      },
      traitement: {
        type: DataTypes.TEXT,
      },
      prescription: {
        type: DataTypes.TEXT,
      },
      rapportsExamens: {
        type: DataTypes.TEXT,
      },
      donneesCryptees: {
        type: DataTypes.TEXT,
      },

});
module.exports = medicalRecord;