import React from 'react';
import classNames from 'classnames';

import './index.scss';

import Comment from './Comment';

const CommentList = ({ className, comments }) =>
  <div className={classNames('comment-list', className)}>
    {
      comments.map(comment =>
        <Comment
          className="comment-list__comment"
          {...comment}
        />
      )
    }
  </div>;

CommentList.propTypes = {
  className: React.PropTypes.string,
  comments: React.PropTypes.array,
};

export default CommentList;
