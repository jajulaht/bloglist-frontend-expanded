import React from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import { setUser } from '../reducers/userReducer'
import { Menu, Button } from 'semantic-ui-react'

const Navi = (props) => {
  const logoutStyle = {
    marginLeft: 8
  }
  // eslint-disable-next-line no-unused-vars
  const handleLogout = (event) => {
    window.localStorage.removeItem('loggedBlogappUser')
    props.setUser([])
  }

  return(
    <div>
      <Menu inverted>
        <Menu.Item link>
          <Link to="/">Blogs</Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item position='right'>
          <span>{props.user.name} logged in <Button style={logoutStyle} onClick={handleLogout}>Logout</Button></span>
        </Menu.Item>
      </Menu>
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

const ConnectedNavi = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navi)

export default ConnectedNavi