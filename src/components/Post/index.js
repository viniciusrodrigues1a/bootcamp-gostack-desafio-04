import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Comment from '../Comment';

function Post({ post }) {
  return (
    <div className="post">
      <div className="user-info">
        <img 
          className="user-img"
          src={post.author.avatar} 
          alt={`Foto de perfil de ${post.author.name}`} 
        />
        <div>
          <span className="post-author-name">{post.author.name}</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
      
      <p>{post.content}</p>

      {post.comments && (
        <>
          <hr className="divider" />

          {post.comments.map(comment => <Comment comment={comment} />)}
        </>
      )}

    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;
