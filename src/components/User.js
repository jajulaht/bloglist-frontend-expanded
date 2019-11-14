import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

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
      <Table.Row key={blog.id}>
        <Table.Cell>{ blogFromState(blog.id) }</Table.Cell>
      </Table.Row>
    )
    return (
      <div>
        <h3>{props.user.name}</h3>
        <Table striped celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Added blogs</Table.HeaderCell>
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