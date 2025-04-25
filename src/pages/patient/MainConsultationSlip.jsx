import { useEffect, useState } from "react";
import {
  createConsultationSlip,
  getConsultationSlipsByPatient,
  payConsultationSlip,
} from "../../services/Api";

export default function ConsultationSlips({ patientId }) {
  const [slips, setSlips] = useState([]);
  const [speciality, setSpeciality] = useState("Cardiologie");
  const [type, setType] = useState("physique");

  const specialites = ["Cardiologie", "Dermatologie", "Gynécologie"];

  const fetchSlips = async () => {
    const res = await getConsultationSlipsByPatient(patientId);
    setSlips(res.data);
  };

  const handleCreate = async () => {
    await createConsultationSlip({
      patientId,
      medecinId: 1, // à remplacer dynamiquement
      type,
      specialite: speciality,
    });
    fetchSlips();
  };

  const handlePayment = async (id) => {
    await payConsultationSlip(id);
    fetchSlips();
  };

  useEffect(() => {
    fetchSlips();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mes bons de consultation</h2>
      <div className="flex gap-4 mb-4">
        <select value={speciality} onChange={e => setSpeciality(e.target.value)} className="border p-2 rounded">
          {specialites.map(s => <option key={s}>{s}</option>)}
        </select>
        <select value={type} onChange={e => setType(e.target.value)} className="border p-2 rounded">
          <option value="physique">Physique</option>
          <option value="téléconsultation">Téléconsultation</option>
        </select>
        <button onClick={handleCreate} className="bg-blue-600 text-white px-4 py-2 rounded">Créer</button>
      </div>

      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Prix</th>
            <th className="border p-2">Statut</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {slips.map(s => (
            <tr key={s.id}>
              <td className="border p-2">{new Date(s.dateEmission).toLocaleString()}</td>
              <td className="border p-2">{s.type}</td>
              <td className="border p-2">{s.prix} FCFA</td>
              <td className="border p-2">{s.status}</td>
              <td className="border p-2">
                {s.status === "non payé" && (
                  <button
                    onClick={() => handlePayment(s.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Payer
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
