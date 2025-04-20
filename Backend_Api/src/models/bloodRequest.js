const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const bloodRequest = sequelize.define("bloodRequest",{
     
    groupeSanguinRequis: {
        type: DataTypes.STRING,
      },
      urgence: {
        type: DataTypes.BOOLEAN,
      },
      dateDemande: {
        type: DataTypes.DATE,
      }
});
module.exports = bloodRequest;