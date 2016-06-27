import React from 'react';
import classNames from 'classnames';

const CommentList = ({ className, comments }) =>
  <div className={classNames('comment-list', className)}>
    {comments}
  </div>;

CommentList.propTypes = {
  className: React.PropTypes.string,
  comments: React.PropTypes.array,
};

export default CommentList;
