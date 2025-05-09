const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const medecinController = require('../controllers/medecinController');
const rendezvousController = require('../controllers/rendezvousController');
const dossierController = require('../controllers/dossierController');

router.post('/register',userController.createUser);
router.post('/login',userController.loginUser);
router.get('/role/:role',userController.getUsersRole);

// Routes spécifiques d'abord
router.post('/dossier', dossierController.createDossier);
router.get('/dossier/:patientId', medecinController.getDossier);
router.post('/dossier/:patientId/note', medecinController.addNote);
router.get('/dossier', dossierController.getAll);
router.get('/dossier/:id', dossierController.getDossierById);

// Puis les routes dynamiques génériques
router.get('/:id/patients', medecinController.getPatientsDuMedecin);
router.get('/:id/rendezvous', medecinController.getRendezvous);
router.put('/:id/disponibilite', medecinController.updateDisponibilite);

router.post('/rendezvous', rendezvousController.createRendezvous);




module.exports = router;