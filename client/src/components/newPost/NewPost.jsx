import React, { useState } from 'react';
import './newPost.css';
import johnDoeIcon from '../../assets/JohnDoe_icon.png';
import PostModal from '../newPostModal/PostModal';

export default function AddPost() {
  const [open, setOpen] = useState(false);

  return (
    <div className="comment_card">
      <div className="comment_container">
        <img src={johnDoeIcon} alt="userIcon" />
        <div className="comment" onClick={() => setOpen(true)}>
          <span>Quoi de neuf, Nom?</span>
        </div>
      </div>
      <PostModal open={open} closeModal={() => setOpen(false)} />
    </div>
  );
}
