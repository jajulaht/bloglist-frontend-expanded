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
        <h3>{props.user.name}</h3>
        <h4>Added blogs</h4>
        <ul>
          <li></li>
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