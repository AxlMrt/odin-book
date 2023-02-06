import React from 'react';
import './register.css';

export default function Register({ open, onClose }) {
  if (!open) return null;
  return (
    <section className="overlay" onClick={onClose}>
      <div
        className="modal_container"
        onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="modal_title">
            <h3>S'inscrire</h3>
            <span className="closeBtn" onClick={onClose}>
              X
            </span>
          </div>
          <p>C'est rapide et facile</p>
        </div>
        <form action="">
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <input type="email" name="" id="email" />
          <input type="password" name="" id="" />
          <div>
            <select name="" id=""></select>
            <select name="" id=""></select>
            <select name="" id=""></select>
          </div>
          <div>
            <div>
              <p>Femme</p>
              <input type="radio" name="" id="" />
            </div>
            <div>
              <p>Homme</p>
              <input type="radio" name="" id="" />
            </div>
            <div>
              <p>Personnalisé</p>
              <input type="radio" name="" id="" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
