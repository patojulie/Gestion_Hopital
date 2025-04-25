import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../services/Logout';
import {
  CalendarPlus,
  Video,
  Ticket,
  FolderOpen,
  ShieldCheck,
  Bell,
  User,
  LogOut,
  Droplet
} from 'lucide-react';

const PatientSidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100%-4rem)] bg-blue-50 px-6 py-4 shadow">

      <nav className="space-y-2 text-sm">
      <Link
            to="/rendez_vous" className="flex items-center gap-2 px-3 py-2 mt-12 rounded hover:bg-blue-100">
          <CalendarPlus size={18} /> Prise de Rendez-vous
      </Link>
      <Link
            to="/teleconsultation" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100">
          <Video size={18} /> Téléconsultation
      </Link>
      <Link
            to="/bonConsultation" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100">
          <Ticket size={18} /> Bons de Consultation
      </Link>
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100">
          <FolderOpen size={18} /> Dossiers Médicaux
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100">
          <ShieldCheck size={18} /> Sécurité des Données
        </a>
        <a href="#sang" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Droplet size={18} /> Dons de Sang
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100">
          <Bell size={18} /> Notifications
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100">
          <User size={18} /> Profil
        </a>
        <a onClick={logout} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-red-100 text-red-600">
          <LogOut size={18} /> Déconnexion
        </a>
      </nav>
    </aside>
  );
};

export default PatientSidebar;
