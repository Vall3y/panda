import alt from '../../alt';

class CommentActions {
  submitComment(comment) {
    return comment;
  }

  filterComments(filter) {
    return filter;
  }
}

export default alt.createActions(CommentActions);
