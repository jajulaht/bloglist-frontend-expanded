import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
  const blogFromState = (id) => {
    const blogFound = props.blogs.find(b => b.id === id)
    return blogFound.title
  }

  console.log('user component', props.user)
  if (props.user === undefined) {
    return <div>Loading...</div>
  }
  else {
    const rows = () => props.user.blogs.map(blog =>
      <li key={blog.id}>
        { blogFromState(blog.id) }
      </li>
    )
    return (
      <div>
        <h3>{props.user.name}</h3>
        <h4>Added blogs</h4>
        <ul>
          {rows()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: ownProps.user,
    users: state.users,
    blogs: state.blogs
  }
}

const ConnectedUser = connect(
  mapStateToProps,
)(User)

export default ConnectedUser