import React from 'react'
import { connect } from 'react-redux'
import { createErrorMsg } from '../reducers/errorReducer'
import {
  likeOf, deleteBlog
} from '../reducers/blogReducer'
import { createNotification } from '../reducers/notificationReducer'
import Comments from './Comments'

const SingleBlog = (props) => {

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
        <h3>{props.blog.title}</h3>
        <p>
          <a href={props.blog.url}>{props.blog.url}</a><br />
          {props.blog.likes} likes
          <button onClick={() =>
            updateBlogLikes(props.blog.id)}>Like
          </button><br />
          added by {props.blog.user.name}
        </p>
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