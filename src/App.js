import './App.css';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboad';
import PatientDashboard from './pages/patient/PatientDashboard';
import GestionUser from './pages/admin/GestionUser';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RendezVous from './pages/patient/RendezVous';
import RendezVousMedecin from './pages/medecin/RendezVousMedecin';
import Teleconsultation from './pages/patient/Teleconsultation';
import TeleconsultationMed from './pages/medecin/Teleconsultations';
import ConsultationSlip from './pages/patient/ConsultationSlip';
import MedecinDashboard from './pages/medecin/MedecinDashboard';
import PatientsMedecin from './pages/medecin/PatientsMedecin';
import Notifications from './pages/medecin/Notification';
import ProfileMedecin from './pages/medecin/ProfileMedecin';
import DossierMedicalPatient from './pages/medecin/DossierMédicalPatient';

function App() {
  return (
    <Router>
    
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/usersManager' element={<GestionUser />} />
          <Route path='/patient' element={<PatientDashboard />} />

          <Route path='/rendez_vous' element={<RendezVous/>} />
          <Route path='/teleconsultation' element={<Teleconsultation/>}/>
          <Route path='/bonConsultation' element={<ConsultationSlip/>}/>

          <Route path='/medecin' element={<MedecinDashboard/>}/>


          <Route path='/medecin/dashboard' element={<MedecinDashboard />} />
          <Route path='/medecin/rendezvous' element={<RendezVousMedecin />} />
          <Route path='/medecin/patients' element={<PatientsMedecin />} /> 
          <Route path='/medecin/teleconsultations' element={<TeleconsultationMed />} />
          <Route path='/medecin/notifications' element={<Notifications />} />
          <Route path='/medecin/profil' element={<ProfileMedecin />} />
          <Route path='/medecin/dossier/:id' element={<DossierMedicalPatient />} />
          <Route path='/medecin/patients' element={<PatientsMedecin />} />



        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      
    </Router>
  );
}

export default App;
