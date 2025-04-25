import React from "react";
import {logout} from "../../services/Logout";
import { 
  MdDashboard, 
  MdCalendarToday, 
  MdPeople, 
  MdVideoCall, 
  MdNotifications, 
  MdPerson, 
  MdLogout 
} from "react-icons/md"; // Icons from Material Design

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-50 p-6 space-y-6 min-h-screen">
      <nav>
        <ul className="space-y-2 mt-8 text-sm">
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdDashboard className="text-xl" />
            Tableau de Bord
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdCalendarToday className="text-xl" />
            Mon Calendrier
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdPeople className="text-xl" />
            Mes Patients
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdVideoCall className="text-xl" />
            Téléconsultations
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdNotifications className="text-xl" />
            Notifications
          </li>
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdPerson className="text-xl" />
            Mon Profil
          </li>
          <a onClick={logout} className="flex  mt-9 items-center gap-3 text-red-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <MdLogout className="text-xl" />
            Déconnexion
          </a>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
