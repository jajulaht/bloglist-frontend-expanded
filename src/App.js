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
  Route
} from 'react-router-dom'
import Users from './components/Users'
import { initializeUsers } from './reducers/usersReducer'
import User from './components/User'
import SingleBlog from './components/SingleBlog'
import Navi from './components/Navi'
import { initializeComments } from './reducers/commentReducer'
import { Container } from 'semantic-ui-react'

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
  const initializeComments = props.initializeComments
  const loginStyle = {
    marginTop: 40
  }
  const mainColumn = {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:20
  }

  const userById = (id) => {
    return props.users.find(u => u.id === id)
  }

  const blogById = (id) => {
    return props.blogs.find(b => b.id === id)
  }

  // Get blogs from db
  useEffect(() => {
    initialize()
  },[initialize])

  // Get users from db
  useEffect(() => {
    initializeUsers()
  },[initializeUsers])

  // Get comments from db
  useEffect(() => {
    initializeComments()
  },[initializeComments])


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
  if (props.user.length === 0) {
    return (
      <Container>
        <div style={loginStyle}>
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
      </Container>
    )
  }

  return (
    <Container>
      <div className='main'>
        <Router>
          <Navi />
          <div style={mainColumn}>
            <h2>Blog app</h2>
            <Notification />
            <ErrorMessage />

            <Route exact path="/users" render={() => <Users />} />
            <Route exact path="/users/:id" render={({ match }) => <User user={userById(match.params.id)} />} />
            <Route exact path="/blogs/:id" render={({ match }) => <SingleBlog blog={blogById(match.params.id)} />} />
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
          </div>
        </Router>
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    notification: state.notification,
    user: state.user,
    users: state.users,
    comments: state.comments
  }
}

const mapDispatchToProps = {
  initializeBlogs,
  createNotification,
  createErrorMsg,
  setUser,
  createBlog,
  initializeUsers,
  initializeComments
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp