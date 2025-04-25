import React from 'react';
import './style/Form.css';
import { useState } from 'react';
import { register } from '../services/Api';

const RegisterForm = () => {
  const [form,setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    role: 'patient' // facultatif, mais bon à avoir
  });
  const [message,setMessage] = useState('');

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await register(form);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data?.error : 'Erreur');
    }
  };
  return(
    <div className="form-container">
    <h2>Log in</h2>
    <div className="form-subtitle">
      Nouveau sur MedCare ? <a href="#">Inscrivez-vous gratuitement</a>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="input-wrapper">
      <input type="text" placeholder="Name" name='name' onChange={handleChange} />
    </div>
    <div className="input-wrapper">
      <input type="text" placeholder="LastName" name='lastName' onChange={handleChange}/>
    </div>
    <div className="input-wrapper">
      <input type="email" placeholder="Email address" name='email' onChange={handleChange} />
      <span className="icon">📧</span>
    </div>
    <div className="input-wrapper">
      <select name="gender" onChange={handleChange}>
        <option value="">Sélectionnez le genre</option>
        <option value="Homme">Homme</option>
        <option value="Femme">Femme</option>
      </select>
    </div>
    <div className="input-wrapper">
      <input type="password" placeholder="Mot de passe (8+ caractères)" name='password' onChange={handleChange} />
      <span className="icon">🔒</span>
    </div>

    <div className="forgot-link">Mot de passe oublié ?</div>

    <button type="submit">S'inscrire</button>
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

export default RegisterForm;
