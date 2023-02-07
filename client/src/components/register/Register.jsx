import { useState } from 'react';
import './register.css';

export default function Register({ open, onClose }) {
  if (!open) return null;
  const [checked, setChecked] = useState(false);

  const yearList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(80), (value, index) => (
      <option key={year + index} value={year - index}>
        {year - index}
      </option>
    ));
  };

  const monthList = () => {
    const months = [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre'
    ];
    return Array.from(new Array(12), (value, index) => (
      <option key={1 + index} value={months[index]}>
        {months[index].slice(0, 3)}
      </option>
    ));
  };

  const dayList = () => {
    const counter = 1;
    return Array.from(new Array(31), (value, index) => (
      <option key={counter + index} value={counter + index}>
        {counter + index}
      </option>
    ));
  };

  const pronounList = () => {
    const pronoun = [
      "Elle",
      "Il",
      "Neutre"
    ]
    return Array.from(new Array(3), (value, index) => (
      <option key={pronoun[index] + index} value={pronoun[index]}>
        {pronoun[index]}
      </option>
    ));
  }

  return (
    <section className="overlay" onClick={onClose}>
      <div
        className="modal_container"
        onClick={(e) => e.stopPropagation()}>
        <div className="modal_head">
          <div className="modal_title">
            <h3>S'inscrire</h3>
            <span className="closeBtn" onClick={onClose}>
              X
            </span>
          </div>
          <p>C'est rapide et facile</p>
        </div>
        <form action="" className="register_form">
          <div className="form_names">
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom de famille" />
          </div>
          <input type="email" name="" id="email" placeholder="E-mail" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Nouveau mot de passe"
          />
          <div>
            <div className="form_birth_container">
              <span>Date de naissance</span>
              <div className="form_birth">
                <select name="" id="">
                  {dayList()}
                </select>
                <select name="" id="">
                  {monthList()}
                </select>
                <select name="" id="">
                  {yearList()}
                </select>
              </div>
            </div>
            <div className="form_gender_container">
              <span>Genre</span>
              <div className="form_gender">
                <div>
                  <p>Femme</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    onClick={() => setChecked(false)}
                  />
                </div>
                <div>
                  <p>Homme</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    onClick={() => setChecked(false)}
                  />
                </div>
                <div>
                  <p>Personnalisé</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    onClick={() => setChecked(true)}
                  />
                </div>
              </div>
              {checked && (
                <div className="gender_select">
                  <select name="" id="">
                    <option selected="selected">
                      Sélectionnez votre pronom
                    </option>
                    {pronounList()}
                  </select>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Genre (facultatif)"
                  />
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="register_btn">
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
