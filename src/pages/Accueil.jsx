import { useState } from 'react';
import '../components/style/Accueil.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegistrerForm';
import MedecinDashboard from './medecin/MedecinDashboard';

const Accueil = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'login' or 'register'

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <div className={modalOpen ? 'blurred-background' : ''}>
      <Header onLogin={() => openModal('login')} onRegister={() => openModal('register')} />
      <MedecinDashboard/>
      {/* <Hero />
      <Services />
      <Advantages />
      <Testimonials /> */}
      <Footer />

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {modalType === 'login' ? <LoginForm /> : <RegisterForm />}
      </Modal>
    </div>
  );
};

export default Accueil;
