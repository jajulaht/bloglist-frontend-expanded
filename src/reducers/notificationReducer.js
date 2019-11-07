const initialState = null

// Action creator functions
export const createNotification = (content, time) => {
  return async dispatch => {
    dispatch ({
      type: 'NEW_NOTIFICATION',
      data: content,
    })
    setTimeout(() => {
      dispatch ({
        type: 'DEL_NOTIFICATION',
      })
    }, time * 1000)
  }
}

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'NEW_NOTIFICATION':
    return action.data
  case 'DEL_NOTIFICATION':
    return initialState
  default:
    return state
  }
}

export default notificationReducer