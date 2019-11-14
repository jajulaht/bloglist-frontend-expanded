import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const LoginFormNoHistory = ({
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

LoginFormNoHistory.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}

const LoginForm = withRouter(LoginFormNoHistory)
export default LoginForm