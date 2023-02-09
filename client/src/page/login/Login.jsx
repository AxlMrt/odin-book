import React, { useState, useRef } from 'react';
import Register from '../../components/register/Register';
import './login.css';

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Adresse e-mail"
            required
          />
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="Mot de passe"
            required
          />
          <button type="submit" id="submitBtn">
            Se connecter
          </button>
        </form>
        <button
          type="button"
          id="login_modal"
          onClick={() => setOpenModal(!openModal)}>
          Créer nouveau compte
        </button>
      </div>
      <Register open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}
