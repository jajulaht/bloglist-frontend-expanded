import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
  console.log('user component', props.user)
  if (props.user === undefined) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div>
        <h2>{props.user.name}</h2>
        <h3>Added blogs</h3>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps)
  return {
    user: state.users.find(user => user._id === ownProps.user.id),
    users: state.users,
    blogs: state.blogs
  }
}

const ConnectedUser = connect(
  mapStateToProps,
)(User)

export default ConnectedUser