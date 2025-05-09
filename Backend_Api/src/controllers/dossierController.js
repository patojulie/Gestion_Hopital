const DossierMedical = require('../models/dossierMedical');

const dossierController = {
  async createDossier(req, res) {
    try {
      const { patientId, antecedents } = req.body;
      const exist = await DossierMedical.findOne({ where: { patientId } });
      if (exist) return res.status(400).json({ message: 'Dossier déjà existant' });

      const dossier = await DossierMedical.create({ patientId, antecedents });
      res.status(201).json({ message: "Dossier médical créé", dossier });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const dossiers = await DossierMedical.findAll();
      res.status(200).json(dossiers);
    } catch (err) {
      console.error("Dossier introuvale ",err);
      res.status(500).json({ error: err.message });
    }
  },  

  async getDossierById(req, res) {
    try{
      const dossierId = req.params.id;
      const dossier = await DossierMedical.findOne({ where: { id: dossierId } });
      if (!dossier) return res.status(404).json({ message: "Dossier introuvable" });

      res.status(200).json(dossier);
    } catch (err) {
      console.error("Erreur lors de la récupération du dossier médical :", err);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
};

module.exports = dossierController;
