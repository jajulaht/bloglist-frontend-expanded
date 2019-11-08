import blogService from '../services/blogs'

// Action creator functions
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch ({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}
export const createBlog = (blog, user) => {
  return async dispatch => {
    const newBlog = await blogService.create(blog)
    dispatch ({
      type: 'NEW_BLOG',
      data: {
        blog: newBlog,
        user: user
      }
    })
  }
}
export const likeOf = (data) => {
  return async dispatch => {
    const updatedBlog = await blogService.update(data.id, data)
    dispatch ({
      type: 'LIKE',
      data: updatedBlog.id
    })
  }
}
export const deleteBlog = (id, title, author) => {
  if (window.confirm(`Do you really want to delete blog ${title}? by ${author}`)) {
    return async dispatch => {
      const deletedBlog = await blogService.deleteThis(id)
      console.log('del', deletedBlog)
      dispatch ({
        type: 'DEL_BLOG',
        data: id
      })
    }
  }
}

const blogReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'NEW_BLOG': {
    const returnedBlog = action.data.blog
    const preparedBlog = {
      ...returnedBlog, user: {
        id: action.data.user.id,
        username: action.data.user.username,
        name: action.data.user.name }
    }
    return state.concat(preparedBlog)
  }
  case 'LIKE': {
    const id = action.data
    const blogToChange = state.find(n => n.id === id)
    const changedBlog = {
      ...blogToChange,
      likes: blogToChange.likes + 1
    }
    return state.map(blog =>
      blog.id !== id ? blog : changedBlog
    )
  }
  case 'DEL_BLOG': {
    const id = action.data
    return state.filter(blog =>
      blog.id !== id
    )
  }
  default:
    return state
  }
}

export default blogReducer