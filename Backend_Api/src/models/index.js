const { sequelize } = require('../config/db');
const users = require('./users');
const payment = require('./payment');
const medicalRecord = require('./medicalRecord');
const notification = require('./notification');
const teleconsultation = require('./teleconsultation');
const consultationSlip = require('./consultationSlip');
const accesAutorisation = require('./accesAutorisation');
const bloodDonation = require('./bloodDonation');
const bloodRequest = require('./bloodRequest');
const rendezVous = require('./rendezVous'); // ✅ ton vrai modèle

// ✅ Utilise rendezVous partout au lieu de appointment
users.hasMany(rendezVous, { foreignKey: 'patientId' });
rendezVous.belongsTo(users, { foreignKey: 'patientId' });

users.hasMany(rendezVous, { foreignKey: 'medecinId' });
rendezVous.belongsTo(users, { foreignKey: 'medecinId' });

users.hasMany(consultationSlip, { foreignKey: 'patientId' });
consultationSlip.belongsTo(users, { foreignKey: 'patientId' });

users.hasMany(medicalRecord, { foreignKey: 'patientId' });
medicalRecord.belongsTo(users, { foreignKey: 'patientId' });

users.hasMany(notification, { foreignKey: 'userId' });
notification.belongsTo(users, { foreignKey: 'userId' });

users.hasMany(accesAutorisation, { foreignKey: 'patientId' });
accesAutorisation.belongsTo(users, { foreignKey: 'patientId' });

users.hasMany(accesAutorisation, { foreignKey: 'medecinId' });
accesAutorisation.belongsTo(users, { foreignKey: 'medecinId' });

rendezVous.hasMany(teleconsultation, { foreignKey: 'rendezVousId' }); // ou appointmentId si ta BDD est déjà faite
teleconsultation.belongsTo(rendezVous, { foreignKey: 'rendezVousId' });

consultationSlip.hasMany(payment, { foreignKey: 'consultationSlipId' });
payment.belongsTo(consultationSlip, { foreignKey: 'consultationSlipId' });

users.hasMany(bloodDonation, { foreignKey: 'patientId' });
bloodDonation.belongsTo(users, { foreignKey: 'patientId' });

users.hasMany(bloodRequest, { foreignKey: 'patientId' });
bloodRequest.belongsTo(users, { foreignKey: 'patientId' });

module.exports = {
  sequelize,
  users,
  bloodDonation,
  bloodRequest,
  consultationSlip,
  rendezVous, // ✅ remplace appointment
  accesAutorisation,
  notification,
  medicalRecord,
  teleconsultation,
  payment,
  dossierMedical: medicalRecord,
  teleconsultationMed: teleconsultation
};
