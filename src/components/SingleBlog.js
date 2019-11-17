import React from 'react'
import { connect } from 'react-redux'
import { createErrorMsg } from '../reducers/errorReducer'
import {
  likeOf, deleteBlog
} from '../reducers/blogReducer'
import { createNotification } from '../reducers/notificationReducer'
import Comments from './Comments'
import { Button, Table } from 'semantic-ui-react'

const SingleBlog = (props) => {
  const likeStyle = {
    marginLeft: 8
  }
  const updateBlogLikes = (searchId) => {
    const blogToUpdate = props.blogs.find(({ id }) => id === searchId)
    const newLikes = blogToUpdate.likes + 1
    const changedBlog = { ...blogToUpdate, likes: newLikes }
    try {
      props.likeOf(changedBlog)
    }
    catch (error) {
      props.createErrorMsg(
        `Something went wrong: ${error}`, 5
      )
    }
  }

  if (props.blog === undefined) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div>
        <h3>{props.blog.title} by {props.blog.author}</h3>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan='3'><a href={props.blog.url}>{props.blog.url}</a></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{props.blog.likes} likes
                <Button data-cy="like" style={likeStyle} onClick={() =>
                  updateBlogLikes(props.blog.id)}>Like
                </Button>
              </Table.Cell>
              <Table.Cell colSpan='2'>added by {props.blog.user.name}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <h4>Comments</h4>
        <Comments id={props.blog.id} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: ownProps.blog,
    users: state.users,
    blogs: state.blogs,
    comments: state.comments
  }
}

const mapDispatchToProps = {
  likeOf,
  deleteBlog,
  createNotification,
  createErrorMsg,
}

const ConnectedSingleBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBlog)

export default ConnectedSingleBlog