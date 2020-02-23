import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment;
