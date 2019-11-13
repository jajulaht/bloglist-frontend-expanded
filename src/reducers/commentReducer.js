import commentService from '../services/comments'

// Action creator functions
export const initializeComments = () => {
  return async dispatch => {
    const comments = await commentService.getAll()
    console.log('kommentit reducerissa', comments)
    dispatch ({
      type: 'INIT_COMMENTS',
      data: comments,
    })
  }
}
export const createComment = (comment, blog) => {
  return async dispatch => {
    const newComment = await commentService.create(comment)
    dispatch ({
      type: 'NEW_COMMENT',
      data: {
        content: newComment,
        blog: blog
      }
    })
  }
}

const commentReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_COMMENTS':
    return action.data
  case 'NEW_COMMENT': {
    console.log('action', action.data)
    return state.concat(action.data)
  }
  default:
    return state
  }
}

export default commentReducer