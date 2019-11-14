import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

const BlogForm = ({
  addBlog,
  newTitle,
  newAuthor,
  newUrl
}) => {
  return (
    <Form onSubmit={addBlog}>
      <h3>Create New</h3>
      <Form.Field>
        <label>Title:</label>
        <input
          {...newTitle.omitreset}
        />
      </Form.Field>
      <Form.Field>
        <label>Author:</label>
        <input
          {...newAuthor.omitreset}
        />
      </Form.Field>
      <Form.Field>
        <label>Url:</label>
        <input
          {...newUrl.omitreset}
        />
      </Form.Field>
      <Button type="submit">Create</Button>
    </Form>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  newTitle: PropTypes.object.isRequired,
  newAuthor: PropTypes.object.isRequired,
  newUrl: PropTypes.object.isRequired
}

export default BlogForm