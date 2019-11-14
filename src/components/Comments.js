import React from 'react'
import { connect } from 'react-redux'
import  { useField } from '../hooks'
import CommentForm from './CommentForm'
import { createComment } from '../reducers/commentReducer'
import { createNotification } from '../reducers/notificationReducer'
import { createErrorMsg } from '../reducers/errorReducer'

const Comments = (props) => {
  const newComment = useField('text')

  const addComment = (event) => {
    event.preventDefault()
    const commentObject = {
      content: newComment.value,
      blog: props.id
    }
    try {
      props.createComment(commentObject)
      newComment.reset()
      props.createNotification(
        `Comment '${commentObject.content}' was added`, 5
      )
    }
    catch (error) {
      props.createErrorMsg(
        `Something went wrong: ${error}`, 5
      )
    }
  }

  const rows = () => props.ownComments.map(comment => {
    return ( <li key={comment.id}>{ comment.content }</li> )
  })

  if (props.ownComments === undefined) {
    return null
  }
  else if (props.ownComments.length === 0) {
    return (
      <div>
        <CommentForm
          addComment={addComment}
          newComment={newComment}
        />
        <p>No comments yet...</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <CommentForm
          addComment={addComment}
          newComment={newComment}
        /><br />
        <ul>
          { rows() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownComments: state.comments.filter(c => c.blog.id === ownProps.id),
    id: ownProps.id,
    blogs: state.blogs,
    comments: state.comments
  }
}

const mapDispatchToProps = {
  createComment,
  createNotification,
  createErrorMsg,
}

const ConnectedComments = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)

export default ConnectedComments