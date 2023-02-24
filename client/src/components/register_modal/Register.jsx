import { useState, useRef } from 'react';
import './register.css';

export default function Register({ open, onClose }) {
  if (!open) return null;
  const [checked, setChecked] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const day = dayRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;

    console.log(new Date(year, month, day));

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      birth: new Date(year, month, day)
    };
  };

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
      <option key={1 + index} value={index}>
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
    const pronoun = ['Elle', 'Il', 'Neutre'];
    return Array.from(new Array(3), (value, index) => (
      <option key={pronoun[index] + index} value={pronoun[index]}>
        {pronoun[index]}
      </option>
    ));
  };

  return (
    <section className="overlay" onClick={onClose}>
      <div
        className="modal_container"
        id="modal"
        onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <div className="modal_title">
            <h3>S'inscrire</h3>
            <span className="closeBtn" onClick={onClose}>
              X
            </span>
          </div>
          <p>C'est rapide et facile</p>
        </div>
        <form className="register_form" onSubmit={handleSubmit}>
          <div className="form_names">
            <input
              type="text"
              id="firstName"
              ref={firstNameRef}
              placeholder="Prénom"
            />
            <input
              type="text"
              id="lastName"
              ref={lastNameRef}
              placeholder="Nom de famille"
            />
          </div>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="E-mail"
          />
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="Nouveau mot de passe"
          />
          <div>
            <div className="form_birth_container">
              <span>Date de naissance</span>
              <div className="form_birth">
                <select id="day" ref={dayRef}>
                  {dayList()}
                </select>
                <select id="month" ref={monthRef}>
                  {monthList()}
                </select>
                <select id="year" ref={yearRef}>
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
                    <option selected="1" value disabled="1">
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

          <button type="submit" id="submitBtn" className="register_btn">
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
