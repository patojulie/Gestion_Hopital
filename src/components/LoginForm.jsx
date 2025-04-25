import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Form.css';
import { login } from '../services/Api';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = new useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      const role = res.data?.user?.role;
      const user = res.data?.user;
      if (user) {
        // Stocke les informations de l'utilisateur dans le localStorage
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userName', `${user.name} ${user.lastName}`);
        localStorage.setItem('userEmail', user.email);

      // 🔁 Redirection selon le rôle
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'medecin') {
        navigate('/medecin');
      } else {
        navigate('/patient');
      }
    }
    } catch (error) {
      setMessage(error.response ? error.response.data?.error : 'Erreur');
      console.log(error);
    }
  };

  return ( // <- 🔴 TU AVAIS OUBLIÉ CE return !
    <div className="form-container">
      <h2>Log in</h2>
      <div className="form-subtitle">
        Nouveau sur Santé ? <a href="#">Inscrivez-vous </a>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            required
          />
          <span className="icon">📧</span>
        </div>

        <div className="input-wrapper">
          <input
            name="password"
            type="password"
            placeholder="Mot de passe (8+ caractères)"
            onChange={handleChange}
            required
          />
          <span className="icon">🔒</span>
        </div>

        <div className="forgot-link">Mot de passe oublié ?</div>

        <button type="submit">Se connecter</button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="social-buttons">
        <button className="social-button social-apple"></button>
        <button className="social-button social-facebook">f</button>
        <button className="social-button social-spotify">🎵</button>
        <button className="social-button social-google">G</button>
      </div>
    </div>
  );
};

export default LoginForm;
