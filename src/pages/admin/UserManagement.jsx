import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getUserByRole } from "../../services/Api";
import { FaUser } from "react-icons/fa";
import ModalAddUser from "./ModalAddUser"; // ajuste le nom du composant s’il est exporté différemment

const roles = [
  { label: "Administrateurs", value: "admin" },
  { label: "Médecins", value: "medecin" },
  { label: "Patients", value: "patient" },
];

export default function UserManagement() {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // 👈 doit être à l'intérieur

  const fetchUsers = async (roleValue) => {
    try {
      setLoading(true);
      const res = await getUserByRole(roleValue);
      setUsers(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des utilisateurs :", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveUser = (newUser) => {
    // 👇 Tu peux faire un appel API ici
    setUsers((prev) => [...prev, newUser]);
    setShowModal(false);

    toast.success("Utilisateur ajouté avec succès !");
  };

  useEffect(() => {
    fetchUsers(activeRole.value);
  }, [activeRole]);

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl text-sm font-bold text-blue-800">Gestion des Utilisateurs</h1>
      </header>

      {/* Onglets des rôles */}
      <div className="flex text-sm space-x-4 mb-6">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => setActiveRole(role)}
            className={`px-4 py-2 rounded ${
              activeRole.value === role.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {role.label}
          </button>
        ))}
      </div>

      {/* Recherche + Ajout */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Rechercher..."
          className="border border-gray-300 rounded px-3 py-2 w-1/2"
        />
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white text-sm px-3 py-2 rounded hover:bg-green-700"
        >
          Ajouter un utilisateur
        </button>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-sm">
            <th className="px-4 py-2 text-left">{(activeRole.value === "medecin" || activeRole === "admin") ? "Photo":"No"}</th>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Rôle</th>
              <th className="px-4 py-2 text-left">Sexe</th>
              <th className="px-4 py-2 text-left">
                {activeRole.value === "patient" ? "Prénom" : "Spécialité"}
              </th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Chargement...
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user, idx) => (
                <tr key={idx} className="border-t text-sm">
                 <td className="px-4 py-2 text-xl text-gray-600">
                    {(activeRole.value === "admin" || activeRole.value === "medecin") ? 
                        <FaUser /> : (activeRole.value === "patient" ? idx + 1 : <FaUser />)}
                  </td>
                  <td className="px-4 py-2">{user.name} {user.lastName}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.gender}</td>
                  <td className="px-4 py-2">
                    {activeRole.value === "patient"
                      ? user.lastName
                      : user.speciality || "—"}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Modifier
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Aucun utilisateur trouvé pour ce rôle.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <ModalAddUser
          role={activeRole.value}
          onClose={() => setShowModal(false)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}
