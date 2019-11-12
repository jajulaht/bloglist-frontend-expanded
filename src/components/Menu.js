import React from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import { setUser } from '../reducers/userReducer'

const Menu = (props) => {
  const menuStyle = {
    paddingTop: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    backgroundColor: '#d6d6d6',
    marginTop: 6
  }
  const padding = {
    paddingRight: 10,
    fontWeight: 'bold'
  }
  // eslint-disable-next-line no-unused-vars
  const handleLogout = (event) => {
    window.localStorage.removeItem('loggedBlogappUser')
    props.setUser([])
  }

  return(
    <div style={menuStyle}>
      <Link style={padding} to="/">blogs</Link>
      <Link style={padding} to="/users">users</Link>
      <span>{props.user.name} logged in <button onClick={handleLogout}>Logout</button></span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser
}

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default ConnectedMenu