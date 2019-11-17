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
        <input data-cy="username" {...username.omitreset} />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input data-cy="password" {...password.omitreset} />
      </Form.Field>
      <Button data-cy="submit" type="submit">login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}

export default LoginForm