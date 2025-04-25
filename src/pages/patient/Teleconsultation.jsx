import React from 'react';
import PatientHeader from '../../components/patientComponent/PatientHeader';
import PatientSidebar from '../../components/patientComponent/PatientSidebar';
import MainTeleconsultation from './MainTeleconsultation';

const Teleconsultation = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <PatientHeader />
      <PatientSidebar />

      <main className="ml-64 mt-16 p-6 space-y-6">
        <MainTeleconsultation/>
      </main>
    </div>
  );
};

export default Teleconsultation;
