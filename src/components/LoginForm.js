import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
  handleLogin,
  username,
  password
}) => {
  return (
    <form className='loginform' onSubmit={handleLogin}>
      <div>
      username
        <input {...username.omitreset} />
      </div>
      <div>
        password
        <input {...password.omitreset} />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}

export default LoginForm