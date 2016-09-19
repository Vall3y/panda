import alt from '../../alt';

import { submitComment, getComments } from '../util/commentApi';

class CommentActions {
  getComments() {
    return (dispatch) => {
      dispatch();

      getComments()
        .then(this.getCommentsSuccess)
        .catch(this.getCommentsError);
    };
  }

  getCommentsSuccess(comments) {
    return comments;
  }

  getCommentsError(err) {
    return err;
  }

  submitComment(comment) {
    return (dispatch) => {
      dispatch();

      submitComment(comment)
        .then(() => { this.submitCommentSuccess(comment); })
        .catch(this.submitCommentError);
    };
  }

  submitCommentSuccess(comment) {
    return comment;
  }

  submitCommentError(comment) {
    return comment;
  }

  changeFilter(filter) {
    return filter;
  }
}

export default alt.createActions(CommentActions);
