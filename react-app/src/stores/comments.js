import alt from '../../alt';
import CommentActions from '../actions/comments';

class CommentStore {
  constructor() {
    this.comments = [];

    this.bindListeners({
      handleSubmitComment: CommentActions.SUBMIT_COMMENT,
      handleFilterComments: CommentActions.FILTER_COMMENTS,
    });
  }

  handleSubmitComment(comment) {
    this.comments.push(comment);
  }

  handleFilterComments(filter) {
    this.comments = filter;
  }
}

module.exports = alt.createStore(CommentStore, 'CommentStore');
