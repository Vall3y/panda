export function filterComments(comments, filter) {
  return comments.filter(comment =>
    comment.email.includes(filter) || comment.message.includes(filter));
}
