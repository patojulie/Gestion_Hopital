import React from "react";
import Header from "../../components/medecinComponent/MedecinHeader";
import Sidebar from "../../components/medecinComponent/MedecinSidebar";

const MedecinDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Rendez-vous d'Aujourd'hui</h3>
              <ul className="list-disc text-sm pl-5">
                <li>10h00 - M. Pierre - Consultation Générale</li>
                <li>11h30 - Mme Dupont - Contrôle Hypertension</li>
              </ul>
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Prochaine Téléconsultation</h3>
              <p className="text-sm">14h00 avec Mme Lefevre</p>
            </div>
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-sm font-semibold mb-2">Demandes d'Accès aux Dossiers</h3>
              <ul className="list-disc text-sm pl-5">
                <li>
                  M. Duran - <button className="btn-voir text-blue-500">Voir Dossier</button>
                </li>
              </ul>
            </div>
          </section>
          <div className="actions mt-6 space-x-4">
            <button className="btn-action bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
              Démarrer la Téléconsultation
            </button>
            <button className="btn-action bg-gray-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
              Voir mon Calendrier
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MedecinDashboard;
