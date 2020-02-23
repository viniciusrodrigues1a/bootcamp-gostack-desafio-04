import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Comments extends Component {
  state = {
    comments: this.props.comments,
    indentationLevel: this.props.indentationLevel,
    reply: (this.props.indentationLevel > 0) ? true : false,
  }

  render() {
    const { comments, indentationLevel, reply } = this.state;
    return (
      comments.map((comment, index) => (
        <div 
          className={`${(indentationLevel === 0) ? 'comment-wrapper' : ''}`}
          key={`${comment.author.name}-${index}-${comment.id}`}
        >
          <div className='comment' style={{ marginLeft: indentationLevel + 'em' }}>
            <div>
              <img 
                className={`user-img ${reply ? 'reply-user-img' : ''}`}
                src={comment.author.avatar} 
                alt={`Foto de perfil de ${comment.author.name}`} 
              />
            </div>

            <div className={`comment-content ${reply ? 'reply-comment-content' : ''}`}>
              <p>
                <span>{comment.author.name} </span>
                {comment.content}
              </p>
            </div>
          </div>

          {comment.comments && 
            <Comments 
              comments={comment.comments} 
              indentationLevel={indentationLevel+0.6} 
            />
          }
        </div>
      ))
    )
  }
}

Comments.defaultProps = {
  indentationLevel: 0,
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  indentationLevel: PropTypes.number,
}

export default Comments;
