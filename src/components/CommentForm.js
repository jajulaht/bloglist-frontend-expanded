import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Segment } from 'semantic-ui-react'

const CommentForm = ({
  addComment,
  newComment
}) => {
  return (
    <Segment>
      <Form onSubmit={addComment}>
        <Form.Field>
          <input
            {...newComment.omitreset}
          />
        </Form.Field>
        <Button type="submit">Add comment</Button>
      </Form>
    </Segment>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  newComment: PropTypes.object.isRequired
}

export default CommentForm