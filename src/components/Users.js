import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const Users = (props) => {
  if (props.users.length === null) {
    return <div>Loading...</div>
  }
  else {
    // Map blogs array data to rows
    console.log('users', props.users)
    const rows = () => props.users.map(user =>
      <Table.Row key={user.id}>
        <Table.Cell><Link to={`/users/${user.id}`}>{user.name}</Link></Table.Cell>
        <Table.Cell>{user.blogs.length}</Table.Cell>
      </Table.Row>
    )
    return (
      <div className='userlist'>
        <h3 data-cy="usersHeading">Users</h3>
        <Table striped celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Blogs created</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows()}
          </Table.Body>
        </Table>
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