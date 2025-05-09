// models/rendezvous.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const RendezVous = sequelize.define('rendezvous', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  motif: {
    type: DataTypes.STRING,
    allowNull: true
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  medecinId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = RendezVous;
