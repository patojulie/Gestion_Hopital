import React from 'react';
import {User} from 'lucide-react';

const PatientHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center justify-between px-6 z-50">
      <div className="text-xl font-bold text-blue-700">Ma santé</div>
      <div className="flex items-center font-bold  gap-2">
      <User size={18} />
        <span className="text-gray-700 text-sm text-orange-700">Ndiaye Fatou</span>
      </div>
    </header>
  );
};

export default PatientHeader;
