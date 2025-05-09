const { rendezVous } = require('../models');

exports.createRendezvous = async (req, res) => {
    try {
        const { date, motif, patientId, medecinId } = req.body;

        if (!date || !patientId || !medecinId) {
        return res.status(400).json({ error: "Les champs date, patientId et medecinId sont requis" });
        }

        const nouveauRendezVous = await rendezVous.create({
        date,
        motif,
        patientId,
        medecinId
        });

        res.status(201).json({
        message: "Rendez-vous créé avec succès",
        rendezVous: nouveauRendezVous
        });
    }catch (error){
        console.error("Erreur lors de la création du rendez-vous :", error);
        res.status(500).json({ error: "Erreur serveur", details: error.message });
    }
}