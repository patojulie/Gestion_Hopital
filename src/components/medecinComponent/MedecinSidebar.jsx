import React from "react";
import {logout} from "../../services/Logout";
import { useNavigate } from 'react-router-dom';
import { 
  MdDashboard, 
  MdCalendarToday, 
  MdPeople, 
  MdVideoCall, 
  MdNotifications, 
  MdPerson, 
  MdLogout,
  MdFolderOpen
} from "react-icons/md"; // Icons from Material Design

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-blue-50 p-6 space-y-6 min-h-screen">
      <nav>
        <ul className="space-y-2 mt-8 text-sm">
          <li onClick={() => navigate('/medecin/dashboard')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdDashboard className="text-xl" />
            Tableau de Bord
          </li>
          <li onClick={() => navigate('/medecin/rendezvous')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdCalendarToday className="text-xl" />
            Mon Calendrier
          </li>
          <li onClick={() => navigate('/medecin/patients')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdPeople className="text-xl" />
            Mes Patients
          </li>
          <li onClick={() => navigate('/medecin/dossiers')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdFolderOpen className="text-xl" />
            Dossiers Médicaux
          </li>

          <li onClick={() => navigate('/medecin/teleconsultations')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdVideoCall className="text-xl" />
            Téléconsultations
          </li>
          <li onClick={() => navigate('/medecin/notifications')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdNotifications className="text-xl" />
            Notifications
          </li>
          <li onClick={() => navigate('/medecin/profil')} className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdPerson className="text-xl" />
            Mon Profil
          </li>
          <a onClick={logout} className="flex mt-9 items-center gap-3 text-red-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdLogout className="text-xl" />
            Déconnexion
          </a>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
