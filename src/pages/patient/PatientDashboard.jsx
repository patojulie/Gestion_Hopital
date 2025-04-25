import React from 'react';
import PatientHeader from '../../components/patientComponent/PatientHeader';
import PatientSidebar from '../../components/patientComponent/PatientSidebar';

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <PatientHeader />
      <PatientSidebar />

      <main className="ml-64 mt-16 p-6 space-y-6 text-sm">
        <section className="bg-white rounded-lg shadow p-4">
          <h3 className="text-blue-700 font-semibold mb-2">Prochain Rendez-vous</h3>
          <p><strong>Date :</strong> 22 avril 2025<br />
            <strong>Heure :</strong> 14h30<br />
            <strong>Médecin :</strong> Dr. Martin Dupont<br />
            <strong>Type :</strong> Consultation Générale
          </p>
        </section>

        <section className="bg-white rounded-lg shadow p-4">
          <h3 className="text-blue-700 font-semibold mb-2">Bons Disponibles</h3>
          <p>3 bons disponibles</p>
        </section>

        <section className="bg-white rounded-lg shadow p-4">
          <h3 className="text-blue-700 font-semibold mb-2">Dernières Activités</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Rendez-vous pris avec Dr. Martin</li>
            <li>Bon acheté - Consultation Spécialisée</li>
            <li>Notification reçue : Confirmation de rendez-vous</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PatientDashboard;
