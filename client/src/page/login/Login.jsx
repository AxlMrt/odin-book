import React, { useState } from 'react';
import Register from '../../components/register/Register';
import './login.css';

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section id="login_page">
      <div className="login_hero">
        <h1>odinbook</h1>
        <h2>
          Avec OdinBook, partagez et restez en contact avec votre
          entourage.
        </h2>
      </div>
      <div className="login_card">
        <form action="" className="login_form">
          <input
            type="text"
            name=""
            id="email"
            placeholder="Adresse e-mail"
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="Mot de passe"
          />
          <button type="submit">Se connecter</button>
        </form>
        <button type="button" onClick={() => setOpenModal(!openModal)}>
          Créer nouveau compte
        </button>
      </div>
      <Register open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}
