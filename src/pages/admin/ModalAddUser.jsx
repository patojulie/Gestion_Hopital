import { useState } from "react";
import { register } from "../../services/Api"; // ton appel API

export default function ModalAddUser({ onClose, onSave, role }) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: role,
    gender: "",
    speciality: "", // pour les médecins
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      if (res.data && res.data.user) {
        onSave(res.data.user); // ⬅️ on renvoie le user au parent
      } else {
        console.error("Réponse inattendue :", res.data);
      }
    } catch (err) {
      console.error("Erreur lors de l'enregistrement :", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Ajouter un {role}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Prénom"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Sexe</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>

          {role === "medecin" && (
            <input
              type="text"
              name="speciality"
              placeholder="Spécialité"
              value={form.speciality}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          )}
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Annuler
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
