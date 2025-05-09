const { users, rendezVous, dossierMedical, Note } = require('../models');

// 1. Voir les rendez-vous du médecin
exports.getRendezvous = async (req, res) => {
  const medecinId = req.params.id;
  try {
    const medecin = await users.findOne({ where: { id: medecinId, role: 'medecin' } });
    if (!medecin) {
      return res.status(404).json({ error: "Médecin introuvable" });
    }

    const rendezvous = await rendezVous.findAll({ where: { medecinId } });
    return res.status(200).json(rendezvous);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

// 2. Voir le dossier médical d’un patient
exports.getDossier = async (req, res) => {
  const patientId = req.params.patientId;
  try {
    const patient = await users.findOne({ where: { id: patientId, role: 'patient' } });
    if (!patient) {
      return res.status(404).json({ error: "Patient introuvable" });
    }

    const dossier = await dossierMedical.findOne({ where: { patientId } });
    if (!dossier) {
      return res.status(404).json({ error: "Dossier médical introuvable" });
    }

    return res.status(200).json(dossier);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

// 3. Ajouter une note dans un dossier médical
exports.addNote = async (req, res) => {
  const patientId = req.params.patientId;
  const { note } = req.body;
  if (!note) return res.status(400).json({ error: "Le champ 'note' est requis" });

  try {
    const patient = await users.findOne({ where: { id: patientId, role: 'patient' } });
    if (!patient) return res.status(404).json({ error: "Patient introuvable" });

    const dossier = await dossierMedical.findOne({ where: { patientId } });
    if (!dossier) return res.status(404).json({ error: "Dossier introuvable" });

    const newNote = await Note.create({
      content: note,
      dossierMedicalId: dossier.id,
    });

    res.status(201).json(newNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

// 4. Modifier la disponibilité d’un médecin
exports.updateDisponibilite = async (req, res) => {
  const medecinId = req.params.id;
  const { disponibilite } = req.body;
  if (!disponibilite) return res.status(400).json({ error: "Le champ 'disponibilite' est requis" });

  try {
    const medecin = await users.findOne({ where: { id: medecinId, role: 'medecin' } });
    if (!medecin) return res.status(404).json({ error: "Médecin introuvable" });

    medecin.disponibilite = disponibilite;
    await medecin.save();

    res.status(200).json({ message: "Disponibilité mise à jour", medecin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 5. Voir les patients du médecin
exports.getPatientsDuMedecin = async (req, res) => {
  const medecinId = req.params.id;
  try {
    const rendezvous = await rendezVous.findAll({
      where: { medecinId },
      attributes: ['patientId'],
      group: ['patientId'],
    });

    const ids = rendezvous.map(r => r.patientId);
    const patients = await users.findAll({
      where: { id: ids, role: 'patient' }
    });

    res.status(200).json(patients);
  } catch (err) {
    console.error('Erreur dans getPatientDu medecin',err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
