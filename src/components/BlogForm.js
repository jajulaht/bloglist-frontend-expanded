import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Segment } from 'semantic-ui-react'

const BlogForm = ({
  addBlog,
  newTitle,
  newAuthor,
  newUrl
}) => {
  return (
    <Segment>
      <Form onSubmit={addBlog}>
        <h3>Create New</h3>
        <Form.Field>
          <label>Title:</label>
          <input
            data-cy="title"
            {...newTitle.omitreset}
          />
        </Form.Field>
        <Form.Field>
          <label>Author:</label>
          <input
            data-cy="author"
            {...newAuthor.omitreset}
          />
        </Form.Field>
        <Form.Field>
          <label>Url:</label>
          <input
            data-cy="url"
            {...newUrl.omitreset}
          />
        </Form.Field>
        <Button data-cy="create" type="submit">Create</Button>
      </Form>
    </Segment>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  newTitle: PropTypes.object.isRequired,
  newAuthor: PropTypes.object.isRequired,
  newUrl: PropTypes.object.isRequired
}

export default BlogForm