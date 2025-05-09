// models/dossierMedical.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const DossierMedical = sequelize.define('dossierMedical', {
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  notes: {
    type: DataTypes.JSON, // ou TEXT si tu préfères
    allowNull: true
  },
  allergies: DataTypes.STRING,
  antecedents: DataTypes.STRING
});

module.exports = DossierMedical;