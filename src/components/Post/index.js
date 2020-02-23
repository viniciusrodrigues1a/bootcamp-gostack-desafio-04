import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Comments from '../Comments';

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

          <Comments comments={post.comments} />
        </>
      )}

    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;
