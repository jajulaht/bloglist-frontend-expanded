const initialState = null

// Action creator functions
export const createErrorMsg = (content, time) => {
  return async dispatch => {
    await dispatch ({
      type: 'NEW_ERROR',
      data: content,
    })
    setTimeout(() => {
      dispatch ({
        type: 'DEL_ERROR',
      })
    }, time * 1000)
  }
}

const errorReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'NEW_ERROR':
    return action.data
  case 'DEL_ERROR':
    return initialState
  default:
    return state
  }
}

export default errorReducer