import React from 'react';
import PatientHeader from '../../components/patientComponent/PatientHeader';
import PatientSidebar from '../../components/patientComponent/PatientSidebar';
import MainRendezVous from './MainRendezVous';

const RendezVous = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <PatientHeader />
      <PatientSidebar />

      <main className="ml-64 mt-16 p-6 space-y-6">
        <MainRendezVous/>
      </main>
    </div>
  );
};

export default RendezVous;
