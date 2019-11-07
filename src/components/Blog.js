import React, { useState, useEffect } from 'react'

const Blog = ({ title, author, url, likes, name, updateBlogLikes, id, deleteBlog, user, username }) => {
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

  // Show or hide remove button
  useEffect(() => {
    if (user.username === username && user.name === name) {
      setVisibleButton(true)
    } else {
      setVisibleButton(false)
    }
  }, [user, username, name])

  return (
    <div className='blog'>
      <div className='head' style={blogTitleStyle} onClick={() => setVisible(!visible)}>{title} {author}</div>
      <div className='info' style={blogStyle}>{url}<br />
        {likes} likes <button onClick={() => updateBlogLikes(id)}>Like</button><br />
        added by {name}<br />
        <button style={delButton} onClick={() => deleteBlog(id, title, author)}>Remove</button>
      </div>
    </div>
  )
}

export default Blog