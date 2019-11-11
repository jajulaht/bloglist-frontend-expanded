import React, { useEffect } from 'react'
import blogService from './services/blogs'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'
import Blogs from './components/Blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import  { useField } from './hooks'
import { createNotification } from './reducers/notificationReducer'
import { createErrorMsg } from './reducers/errorReducer'
import { initializeBlogs, createBlog } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import Users from './components/Users'
import { initializeUsers } from './reducers/usersReducer'
import User from './components/User'

const App = (props) => {
  const username = useField('text')
  const password = useField('password')
  const newTitle = useField('text')
  const newAuthor = useField('text')
  const newUrl = useField('text')
  const blogFormRef = React.createRef()
  const initialize = props.initializeBlogs
  const setUser = props.setUser
  const initializeUsers = props.initializeUsers

  const userById = (id) => {
    console.log('userById', props.users.find(u => u.id === id))
    return props.users.find(u => u.id === id)
  }

  // Get blogs from db
  useEffect(() => {
    initialize()
  },[initialize])

  // Get users from db
  useEffect(() => {
    initializeUsers()
  },[initializeUsers])

  // Check if log info saved in local storage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [setUser])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value, password: password.value
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      username.reset()
      password.reset()
    } catch (exception) {
      props.createErrorMsg('Wrong username or password', 5)
      username.reset()
      password.reset()
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleLogout = (event) => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
  }

  // Add a blog, change response's user to match blogs state
  const addBlog = (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()
    const blogObject = {
      title: newTitle.value,
      author: newAuthor.value,
      url: newUrl.value
    }
    try {
      props.createBlog(blogObject, props.user)
      newTitle.reset()
      newAuthor.reset()
      newUrl.reset()
      props.createNotification(
        `'${blogObject.title}' was added`, 5
      )
    }
    catch (error) {
      props.createErrorMsg(
        `Something went wrong: ${error}`, 5
      )
    }
  }

  // Conditional rendering
  if (props.user === null) {
    return (
      <div className='main'>
        <Router>
          <h2>Log in to application</h2>
          <Notification />
          <ErrorMessage />
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
          />
        </Router>
      </div>
    )
  }

  return (
    <div className='main'>
      <Router>
        <h2>Blogs</h2>
        <Notification />
        <ErrorMessage />

        <p>{props.user.name} logged in <button onClick={handleLogout}>Logout</button></p>

        <Route exact path="/users" render={() => <Users />} />
        <Route exact path="/users/:id" render={({ match }) => <User user={userById(match.params.id)} />} />
        <Route exact path="/" render={() =>
          <>
            <Togglable buttonLabel="New blog note" ref={blogFormRef}>
              <BlogForm
                addBlog={addBlog}
                newTitle={newTitle}
                newAuthor={newAuthor}
                newUrl={newUrl}
              />
            </Togglable>
          <Blogs />
          </>}
        />
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    notification: state.notification,
    user: state.user,
    users: state.users
  }
}

const mapDispatchToProps = {
  initializeBlogs,
  createNotification,
  createErrorMsg,
  setUser,
  createBlog,
  initializeUsers
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp