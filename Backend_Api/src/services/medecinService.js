const { RendezVous, DossierMedical, users } = require('../models');

const medecinService = {
  // Voir les rendez-vous attribués au médecin
  async getRendezVous(medecinId) {
    const rdvs = await RendezVous.findAll({ where: { medecinId } });
    return rdvs;
  },

  // Consulter un dossier médical par ID patient
  async getDossierMedical(patientId) {
    const dossier = await DossierMedical.findOne({ where: { patientId } });
    if (!dossier) throw new Error("Dossier médical introuvable");
    return dossier;
  },

  // Ajouter des notes au dossier médical
  async ajouterNote(patientId, note) {
    const dossier = await DossierMedical.findOne({ where: { patientId } });
    if (!dossier) throw new Error("Dossier médical introuvable");
    dossier.notes = [...(dossier.notes || []), note];
    await dossier.save();
    return dossier;
  },

  // Modifier la disponibilité (optionnel si tu as ce champ)
  async modifierDisponibilite(medecinId, disponibilite) {
    const medecin = await users.findByPk(medecinId);
    if (!medecin || medecin.role !== 'medecin') {
      throw new Error("Médecin non trouvé");
    }
    medecin.disponibilite = disponibilite;
    await medecin.save();
    return medecin;
  }
};

module.exports = medecinService;
