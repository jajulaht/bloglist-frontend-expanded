import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

const LoginForm = ({
  handleLogin,
  username,
  password
}) => {
  return (
    <Form onSubmit={handleLogin}>
      <Form.Field>
        <label>username</label>
        <input {...username.omitreset} />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input {...password.omitreset} />
      </Form.Field>
      <Button type="submit">login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}

export default LoginForm