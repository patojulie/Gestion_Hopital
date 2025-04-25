import { useEffect, useState } from "react";
import { createAppointment, getAppointmentsByPatient, getSpecialities } from "../../services/Api";

export default function RendezVous() {
  const [patientId, setPatientId] = useState(null); // Stocker l'ID du patient
  const [showForm, setShowForm] = useState(false);
  const [speciality, setSpeciality] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  // Fonction pour récupérer les spécialités des médecins
  const fetchSpecialities = async () => {
    try {
      const res = await getSpecialities();
      setSpecialities(res.data);  // Mettre à jour les spécialités dans l'état
    } catch (err) {
      console.error("Erreur lors du chargement des spécialités", err);
    }
  };

  // Fonction pour récupérer les rendez-vous du patient
  const fetchAppointments = async () => {
    try {
      console.log("Fetching with:",patientId);
      if (patientId) {
        const res = await getAppointmentsByPatient(patientId);
        setAppointments(res.data);
      }
    } catch (err) {
      console.error("Erreur lors du chargement des rendez-vous", err);
    }
  };

  // Fonction de soumission du formulaire de création de rendez-vous
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAppointment({
        patientId,
        speciality,
        date,
        type,
      });
      setShowForm(false);
      fetchAppointments();
    } catch (err) {
      console.error("Erreur lors de la création du rendez-vous", err);
    }
  };

  // Fonction pour récupérer l'ID du patient depuis localStorage
  const fetchPatientId = () => {
    const storedPatientId = localStorage.getItem('userId'); // Récupérer l'ID du patient depuis localStorage
    if (storedPatientId) {
      setPatientId(storedPatientId); // Mettre à jour l'ID du patient
    } else {
      console.error("ID du patient non trouvé dans localStorage.");
    }
  };

  useEffect(() => {
    fetchPatientId(); // Récupérer l'ID du patient depuis localStorage lors de l'initialisation
    fetchSpecialities(); // Charger les spécialités à l'initialisation
  }, []);

  useEffect(() => {
    if (patientId) {
      fetchAppointments(); // Charger les rendez-vous du patient après avoir récupéré l'ID
    }
  }, [patientId]);

  return (
    <div className="p-4">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white text-sm rounded"
      >
        {showForm ? "Fermer" : "Créer un rendez-vous"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="border px-3 text-sm py-2 w-full rounded"
            required
          >
            <option value="">Choisir une spécialité</option>
            {specialities.map((s) => (
              <option key={s.speciality} value={s.speciality}>
                {s.speciality}
              </option>
            ))}
          </select>

          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border text-sm px-3 py-2 w-full rounded"
            required
          />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border text-sm px-3 py-2 w-full rounded"
              required
            >
              <option value="">Choisir le type de consultation</option>
              <option value="présentiel">Présentiel</option>
              <option value="en ligne">En ligne</option>
            </select>


          <button type="submit" className="bg-green-600 text-sm text-white px-4 py-2 rounded">
            Valider
          </button>
        </form>
      )}

      <h2 className="text-sm font-bold mb-2">Mes rendez-vous</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-sm bg-gray-200">
            <th className="border bg-orange-100 px-3 py-2">Date</th>
            <th className="border px-3 py-2">Type</th>
            <th className="border bg-orange-100 px-3 py-2">Médecin</th>
            <th className="border px-3 py-2">Spécialité</th>
            <th className="border bg-orange-100 px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((rdv) => (
            <tr className="text-center" key={rdv.id}>
              <td className="border bg-orange-50 text-white-700 px-3 py-2">{new Date(rdv.date).toLocaleString()}</td>
              <td className="border px-3 py-2">{rdv.type}</td>
              <td className="border bg-orange-50 px-3 py-2">
                {rdv.medecin?.name} {rdv.medecin?.lastName}
              </td>
              <td className="border px-3 py-2">{rdv.medecin?.speciality}</td>
              <td className="border bg-orange-50 px-3 py-2">{rdv.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
