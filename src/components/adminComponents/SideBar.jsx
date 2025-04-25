import { Link } from "react-router-dom";
import {logout} from "../../services/Logout";
import {
  Home,
  Users,
  Calendar,
  ClipboardList,
  Video,
  Droplet,
  Bell,
  Lock,
  BarChart2,
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-50 p-6 h-screen fixed overflow-y-auto">
      <h2 className="text-xl text-blue-800 mb-6">🏥 Ma santé</h2>
      <nav className="space-y-2 text-black text-sm">
        <a href="#dashboard" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Home size={18} /> Tableau de Bord
        </a>
        <Link to="/usersManager" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Users size={18} /> Gestion des Utilisateurs
        </Link>
        <a href="#rendezvous" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Calendar size={18} /> Gestion des Rendez-vous
        </a>
        <a href="#bons" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <ClipboardList size={18} /> Gestion des Bons
        </a>
        <a href="#teleconsultations" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Video size={18} /> Téléconsultations
        </a>
        <a href="#sang" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Droplet size={18} /> Dons de Sang
        </a>
        <a href="#notifications" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Bell size={18} /> Notifications
        </a>
        <a href="#acces" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Lock size={18} /> Autorisations d'Accès
        </a>
        <a href="#stats" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <BarChart2 size={18} /> Statistiques & Rapports
        </a>
        <a href="#parametres" className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <Settings size={18} /> Configuration
        </a>
        <a onClick={logout} className="flex items-center gap-2 hover:bg-blue-100 px-2 py-1 rounded">
          <LogOut size={18} /> Déconnexion
        </a>
      </nav>
    </aside>
  );
}
