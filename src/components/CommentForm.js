import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

const CommentForm = ({
  addComment,
  newComment
}) => {
  return (
    <Form onSubmit={addComment}>
      <Form.Field>
        <input
          {...newComment.omitreset}
        />
        <Button type="submit">Add comment</Button>
      </Form.Field>
    </Form>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  newComment: PropTypes.object.isRequired
}

export default CommentForm