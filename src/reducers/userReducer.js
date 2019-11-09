// Action creator functions
export const setUser = (data) => {
  return async dispatch => {
    await dispatch ({
      type: 'SET_USER',
      data: data,
    })
  }
}

const userReducer = (state = [], action) => {
  switch(action.type) {
  case 'SET_USER':
    return action.data
  default:
    return state
  }
}

export default userReducer