import React from 'react';

import './styles.css';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div>
        <img 
          className="user-img"
          src={comment.author.avatar} 
          alt={`Foto de perfil de ${comment.author.name}`} 
        />
      </div>

      <div className="comment-content">
        <p>{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment;
