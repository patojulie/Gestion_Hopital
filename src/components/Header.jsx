const Header = ({ onLogin, onRegister }) => {
    return (
      <header>
        <div><strong>🏥 Hôpital</strong></div>
        <nav className="nav-links">
          <a href="#about">À Propos</a>
          <a href="#services">Nos Services</a>
          <a href="#appointment">Prendre Rendez-vous</a>
          <a href="#teleconsultation">Téléconsultation</a>
          <a href="#bons">Achat de Bons</a>
          <a href="#blood">Don de Sang</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cta-buttons">
          <button onClick={onLogin}>Connexion</button>
          <button onClick={onRegister}>Inscription</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  