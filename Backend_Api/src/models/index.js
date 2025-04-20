
const {sequelize} = require('../config/db');
const users = require('./users');
const appointment = require('./appointments')
const payment = require('./payment');
const medicalRecord = require('./medicalRecord');
const notification = require('./notification');
const teleconsultation = require('./teleconsultation');
const consultationSlip = require('./consultationSlip');
const accesAutorisation = require('./accesAutorisation');
const bloodDonation = require('./bloodDonation');
const bloodRequest = require('./bloodRequest');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');


users.hasMany(appointment,{foreignKey:'patientId'});
appointment.belongsTo(users,{foreignKey:'patientId'});

users.hasMany(appointment,{foreignKey:'medecinId'});
appointment.belongsTo(users,{foreignKey:'medecinId'});

users.hasMany(consultationSlip,{foreignKey:'patientId'});
consultationSlip.belongsTo(users,{foreignKey:'patientId'});

users.hasMany(medicalRecord,{foreignKey:'patientId'});
medicalRecord.belongsTo(users,{foreignKey:'patientId'});

users.hasMany(notification,{foreignKey:'userId'});
notification.belongsTo(users,{foreignKey:'userId'});

users.hasMany(accesAutorisation,{foreignKey:'patientId'});
accesAutorisation.belongsTo(users,{foreignKey:'patientId'});

users.hasMany(accesAutorisation,{foreignKey:'medecinId'});
accesAutorisation.belongsTo(users,{foreignKey:'medecinId'});

appointment.hasMany(teleconsultation,{foreignKey:'appointmentId'});
teleconsultation.belongsTo(users,{foreignKey:'appointmentId'});

consultationSlip.hasMany(payment,{foreignKey:'consultationSlipId'});
payment.belongsTo(consultationSlip,{foreignKey:'consultationSlipId'});

users.hasMany(bloodDonation,{foreignKey:'patientId'});
bloodDonation.belongsTo(users,{foreignKey:'patientId'});

users.hasMany(bloodRequest,{foreignKey:'patientId'});
bloodRequest.belongsTo(users,{foreignKey:'patientId'});


module.exports ={
    sequelize,
    users,
    bloodDonation,
    bloodRequest,
    consultationSlip,
    appointment,
    accesAutorisation,
    notification,
    medicalRecord,
    teleconsultation,
    payment
}


