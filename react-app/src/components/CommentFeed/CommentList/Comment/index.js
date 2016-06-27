import React from 'react';
import { getGravatarUrlByEmail } from './utils';

const Comment = ({ email, message }) =>
  <div className="comment">
    <img
      className="comment__avatar"
      alt={getGravatarUrlByEmail(email)}
      src={getGravatarUrlByEmail(email)}
    />
    <div className="comment__email">{email}</div>
    <div className="comment__message">{message}</div>
  </div>;

Comment.propTypes = {
  email: React.PropTypes.array,
  message: React.PropTypes.array,
};

export default Comment;
