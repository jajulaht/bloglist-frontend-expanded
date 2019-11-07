import React from 'react'
import Blog from './Blog'

const Blogs = ({ blogs, updateBlogLikes, deleteBlog, user }) => {
  if (blogs.length === null) {
    return <div>Loading...</div>
  }
  else {
    // Arrange blogs by likes in descending order
    const arrangedBlogs = blogs.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
    // Map blogs array data to rows
    const rows = () => arrangedBlogs.map(blog =>
      <React.Fragment key={blog.id}>
        <Blog
          title={blog.title}
          author={blog.author}
          url={blog.url}
          likes={blog.likes}
          name={blog.user.name}
          updateBlogLikes={updateBlogLikes}
          id={blog.id}
          deleteBlog={deleteBlog}
          username={blog.user.username}
          user={user}
        /><br />
      </React.Fragment>
    )
    return (
      <div className='bloglist'>
        {rows()}
      </div>
    )
  }
}

export default Blogs