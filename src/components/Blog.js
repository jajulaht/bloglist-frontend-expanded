import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  const blogTitleStyle = {
    paddingTop: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    backgroundColor: '#ededed',
    marginTop: 6,
    marginBottom: 0
  }

  return (
    <div className='head' style={blogTitleStyle}>
      <Link to={`/blogs/${props.blog.id}`}>
        <span>{props.blog.title} {props.blog.author}</span>
      </Link>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: ownProps.blog,
    blogs: state.blogs,
    user: state.user
  }
}

const mapDispatchToProps = {
  //
}

const ConnectedBlog = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

export default ConnectedBlog