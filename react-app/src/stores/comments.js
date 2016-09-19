import alt from '../../alt';
import CommentActions from '../actions/comments';

class CommentStore {
  constructor() {
    this.comments = [];
    this.filter = '';

    this.bindListeners({
      handleGetComments: CommentActions.GET_COMMENTS,
      handleGetCommentsSuccess: CommentActions.GET_COMMENTS_SUCCESS,
      handleGetCommentsError: CommentActions.GET_COMMENTS_ERROR,
      handleSubmitComment: CommentActions.SUBMIT_COMMENT,
      handleSubmitCommentSuccess: CommentActions.SUBMIT_COMMENT_SUCCESS,
      handleSubmitCommentError: CommentActions.SUBMIT_COMMENT_ERROR,
      handleChangeFilter: CommentActions.CHANGE_FILTER,
    });
  }

  handleGetComments() {
    this.loading = true;
  }

  handleGetCommentsSuccess(comments) {
    this.comments = comments;
    this.loading = false;
  }

  handleGetCommentsError(error) {
    this.error = error;
    this.loading = false;
  }

  handleSubmitComment() {
    this.error = undefined;
    this.loading = true;
  }

  handleSubmitCommentSuccess(comment) {
    this.comments.push(comment);
    this.loading = false;
  }

  handleSubmitCommentError(error) {
    this.error = error;
    this.loading = false;
  }

  handleChangeFilter(filter) {
    this.filter = filter;
  }
}

module.exports = alt.createStore(CommentStore, 'CommentStore');
