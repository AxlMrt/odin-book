import React from 'react';
import './postModal.css';
import johnDoeIcon from '../../assets/JohnDoe_icon.png';

export default function PostModal({ open, closeModal }) {
  if (!open) return null;

  return (
    <section className="post_overlay" onClick={closeModal}>
      <div className="post_modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <div className="modal_title">
            <h2>Créer une publication</h2>
            <span onClick={closeModal}>X</span>
          </div>
        </div>
        <div className="modal_body">
          <div>
            <img src={johnDoeIcon} alt="userIcon" />
            <span>Name</span>
          </div>
          <form className="post_form">
            <textarea
              name=""
              id=""
              rows="10"
              placeholder="Quoi de neuf, Name ?"
            />
            <div>
              <span>Ajouter à votre publication</span>
            </div>

            <button type="submit" className="post_btn">
              Publier
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
