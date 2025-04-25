import React from 'react';
import PatientHeader from '../../components/patientComponent/PatientHeader';
import PatientSidebar from '../../components/patientComponent/PatientSidebar';
import MainConsultationSlip from './MainConsultationSlip';

const ConsultationSlip = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <PatientHeader />
      <PatientSidebar />

      <main className="ml-64 mt-16 p-6 space-y-6">
        <MainConsultationSlip/>
      </main>
    </div>
  );
};

export default ConsultationSlip;
