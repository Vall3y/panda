import React from 'react';

import './index.scss';

import CommentActions from '../../actions/comments';
import CommentStore from '../../stores/comments';

import Form from './Form';
import CommentList from './CommentList';

import { filterComments } from '../../util/commentUtil.js';

class CommentFeed extends React.Component {
  constructor(props) {
    super(props);

    this.boundHandleFormSubmit = this.handleFormSubmit.bind(this);
    this.boundHandleFilterChange = this.handleFilterChange.bind(this);

    this.state = CommentStore.getState();

    CommentActions.getComments();
  }

  componentDidMount() {
    CommentStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    CommentStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  handleFormSubmit(comment) {
    CommentActions.submitComment(comment);
  }

  handleFilterChange(e) {
    const filter = e.target.value;
    CommentActions.changeFilter(filter);
  }

  render() {
    const { comments, filter } = this.state;
    const filteredComments = filterComments(comments, filter);

    return (
      <div className="comment-feed">
        <Form
          onFormSubmit={this.boundHandleFormSubmit}
        />
        <div className="comment-feed__filter">
          <input
            className="comment-feed__filter-input"
            type="text"
            placeholder="Filter"
            onChange={this.boundHandleFilterChange}
          />
        </div>
        <CommentList
          comments={filteredComments}
        />
      </div>
    );
  }
}

export default CommentFeed;
