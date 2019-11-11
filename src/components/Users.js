import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = (props) => {
  if (props.users.length === null) {
    return <div>Loading...</div>
  }
  else {
    // Map blogs array data to rows
    console.log('users', props.users)
    const rows = () => props.users.map(user =>
      <tr key={user.id}>
        <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
        <td>{user.blogs.length}</td>
      </tr>
    )
    return (
      <div className='userlist'>
        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Blogs created</th>
            </tr>
          </thead>
          <tbody>
            {rows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {
  //
}

const ConnectedUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default ConnectedUsers