// import loginService from '../services/login'
//import blogService from '../services/blogs'

// Action creator functions
export const setUser = (data) => {
  return async dispatch => {
    await dispatch ({
      type: 'SET_USER',
      data: data,
    })
  }
}
export const checkUser = () => {
  return dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch ({
        type: 'CHECK_USER',
        data: user,
      })
    }
  }
}


const userReducer = (state = [], action) => {
  switch(action.type) {
  case 'SET_USER':
    return action.data
  case 'CHECK_USER':
    return action.data
  default:
    return state
  }
}

export default userReducer