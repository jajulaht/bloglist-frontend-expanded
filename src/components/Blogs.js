import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

const Blogs = (props) => {
  if (props.blogs.length === null) {
    return <div>Loading...</div>
  }
  else {
    // Arrange blogs by likes in descending order
    const arrangedBlogs = props.blogs.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
    // Map blogs array data to rows
    const rows = () => arrangedBlogs.map(blog =>
      <Table.Row key={blog.id}>
        <Table.Cell>
          <Link to={`/blogs/${blog.id}`}>
            {blog.title}
          </Link>
        </Table.Cell>
        <Table.Cell>
          {blog.author}
        </Table.Cell>
      </Table.Row>
    )
    return (
      <div className='bloglist'>
        <Table striped celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Blog</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { rows() }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

const mapDispatchToProps = {
  //
}

const ConnectedBlogs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs)

export default ConnectedBlogs