import React from 'react'
import PropTypes from 'prop-types'

const CommentForm = ({
  addComment,
  newComment
}) => {
  return (
    <form onSubmit={addComment}>
      <input
        {...newComment.omitreset}
      />
      <button type="submit">Add comment</button>
    </form>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  newComment: PropTypes.object.isRequired
}

export default CommentForm