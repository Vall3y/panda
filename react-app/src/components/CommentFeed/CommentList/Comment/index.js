import React from 'react';
import classNames from 'classnames';
import { getGravatarUrlByEmail } from './utils';

import './index.scss';

const AVATAR_SIZE = 40;

const Comment = ({ email, message, className }) =>
  <div className={classNames('comment', className)}>
    <img
      className="comment__avatar"
      alt={getGravatarUrlByEmail(email, AVATAR_SIZE)}
      src={getGravatarUrlByEmail(email, AVATAR_SIZE)}
    />
    <div className="comment__fields">
      <div className="comment__email">{email}</div>
      <div className="comment__message">{message}</div>
    </div>
  </div>;

Comment.propTypes = {
  className: React.PropTypes.className,
  email: React.PropTypes.string,
  message: React.PropTypes.string,
};

export default Comment;
