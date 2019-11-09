import React from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'

const Blogs = (props) => {
  if (props.blogs.length === null) {
    return <div>Loading...</div>
  }
  else {
    // Arrange blogs by likes in descending order
    const arrangedBlogs = props.blogs.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
    // Map blogs array data to rows
    const rows = () => arrangedBlogs.map(blog =>
      <React.Fragment key={blog.id}>
        <Blog
          title={blog.title}
          author={blog.author}
          url={blog.url}
          likes={blog.likes}
          name={blog.user.name}
          id={blog.id}
          username={blog.user.username}
          user={props.user}
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