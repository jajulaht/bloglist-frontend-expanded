import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  likeOf, deleteBlog
} from '../reducers/blogReducer'
import { createNotification } from '../reducers/notificationReducer'
//import {setUser} from '../reducers/userReducer'

const Blog = (props) => {
  const [visible, setVisible] = useState(false)
  const [visibleButton, setVisibleButton] = useState(false)

  const blogTitleStyle = {
    paddingTop: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    backgroundColor: '#d6d6d6',
    marginTop: 6,
    cursor: 'pointer'
  }
  const blogStyle = {
    display: visible ? '' : 'none',
    paddingTop: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    backgroundColor: '#f0f0f0',
    marginBottom: 0
  }
  const delButton = {
    display: visibleButton ? '' : 'none'
  }
  const title = props.title
  const author = props.author
  const url = props.url
  const likes = props.likes
  const id = props.id
  const name = props.name

  const updateBlogLikes = (searchId) => {
    const blogToUpdate = props.blogs.find(({ id }) => id === searchId)
    console.log('haettu', blogToUpdate)
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

  const handleDelete = (id, title, author) => {
    try {
      props.deleteBlog(id, title, author)
      props.createNotification(`Blog '${title}' was removed`, 5)
    }
    catch (error) {
      props.createErrorMsg(
        `Something went wrong: ${error}`, 5
      )
    }
  }

  // Show or hide remove button
  useEffect(() => {
    if (props.user.username === props.username && props.user.name === name) {
      setVisibleButton(true)
    } else {
      setVisibleButton(false)
    }
  }, [props, name])

  return (
    <div className='blog'>
      <div className='head' style={blogTitleStyle} onClick={() =>
        setVisible(!visible)}>{title} {author}
      </div>
      <div className='info' style={blogStyle}>
        {url}<br />
        {likes} likes
        <button onClick={() =>
          updateBlogLikes(id)}>Like
        </button><br />
          added by {name}<br />
        <button style={delButton} onClick={() =>
          handleDelete(id, title, author)}>Remove
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

const mapDispatchToProps = {
  likeOf,
  deleteBlog,
  createNotification
}

const ConnectedBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

export default ConnectedBlog