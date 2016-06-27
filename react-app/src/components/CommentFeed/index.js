import React from 'react';

import './index.scss';

import { submitComment } from '../../actions/comments';

import Form from './Form';
import CommentList from './CommentList';


class CommentFeed extends React.Component {
  constructor(props) {
    super(props);

    this.boundHandleFormSubmit = this.handleFormSubmit.bind(this);
    this.boundHandleFilterChange = this.handleFilterChange.bind(this);

    this.state = {
      comments: [],
    };
  }

  handleFormSubmit(comment) {
    submitComment(comment);
  }

  handleFilterChange() {}

  render() {
    return (
      <div className="comment-feed">
        <Form
          onFormSubmit={this.boundHandleFormSubmit}
        />
        <input
          className="comment-feed_filter"
          type="text"
          onChange={this.boundHandleFilterChange}
        />
        <CommentList
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default CommentFeed;
