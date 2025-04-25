import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Dropzone from "react-dropzone";
import {
  getTeleconsultationsByUser,
  initTeleconsultationsForPatient,
  payTeleconsultation,
} from "../../services/Api";

export default function TeleconsultationPage() {
  const [teles, setTeles] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [images, setImages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);

  // Si userId ou role changent dynamiquement (ex: login après chargement)
  const fetchTeleconsultations = async () => {
    try {
      console.log("Fetching with:", userId, role);
      if (role === "patient") {
        await initTeleconsultationsForPatient(userId);
      }
      const res = await getTeleconsultationsByUser(userId, role);
      setTeles(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des téléconsultations", err);
    }
  };
  useEffect(() => {
    if (!userId || !role) {
      const storedUserId = localStorage.getItem("userId");
      const storedRole = localStorage.getItem("role");

      if (storedUserId) setUserId(storedUserId);
      if (storedRole) setRole(storedRole);
      console.log('erreur');
    }
  }, [userId, role]);

  // Lancer le fetch uniquement quand userId et role sont définis
  useEffect(() => {
    if (userId && role) {
      fetchTeleconsultations();
    }
  }, [userId, role,fetchTeleconsultations]);

  const handleDrop = (acceptedFiles) => {
    setImages(acceptedFiles.map((file) => URL.createObjectURL(file)));
  };

  const handlePayment = async (id) => {
    try {
      await payTeleconsultation(id);
      fetchTeleconsultations();
    } catch (err) {
      console.error("Erreur lors du paiement", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mes téléconsultations</h2>
      <table className="w-full mb-6 border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Lien</th>
            <th className="p-2 border">Statut</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {teles.map((t) => (
            <tr key={t.id}>
              <td className="p-2 border">{new Date(t.dateDebut).toLocaleString()}</td>
              <td className="p-2 border">
                {t.status === "payé" && t.isPaid ? (
                  <span className="text-green-600">{t.urlVision}</span>
                ) : (
                  <span className="text-gray-400 italic">Lien indisponible</span>
                )}
              </td>
              <td className="p-2 border">{t.status}</td>
              <td className="p-2 border space-x-2">
                {t.status === "payé" && t.isPaid ? (
                  <button
                    onClick={() => setSelectedUrl(t.urlVision)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Rejoindre
                  </button>
                ) : t.status === "accepté" && !t.isPaid ? (
                  <button
                    onClick={() => handlePayment(t.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Payer
                  </button>
                ) : (
                  <span className="text-gray-400 italic">En attente</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUrl && (
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Salle de téléconsultation</h3>
          <ReactPlayer url={selectedUrl} playing controls />
        </div>
      )}

      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="border-dashed border-2 p-6 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p>Déposez des images à montrer au médecin ici</p>
          </div>
        )}
      </Dropzone>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="preview"
            className="w-full h-40 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
}
