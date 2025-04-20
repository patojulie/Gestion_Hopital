const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const bloodDonation = sequelize.define("bloodDonation",{
     
    dateDon: {
        type: DataTypes.DATE,
      },
      groupeSanguin: {
        type: DataTypes.STRING,
      },
      quantite: {
        type: DataTypes.FLOAT,
      }
});
module.exports = bloodDonation;