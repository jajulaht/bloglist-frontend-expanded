import React from 'react'
import {
  render, waitForElement
} from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('login')
    )
    // console.log('eka', component.getByText('login'))
    // expectations here
    expect(component.container).toHaveTextContent(
      'Log in to application'
    )
    expect(component.container).toHaveTextContent(
      'username'
    )
    expect(component.container).toHaveTextContent(
      'password'
    )
    expect(component.container).not.toHaveTextContent(
      'Blogs'
    )
  })

  test('if user is logged, blogs are rendered', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }

    localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('.main')
    )

    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs.length).toBe(8)

    expect(component.container).toHaveTextContent(
      'Second class tests, version 1.0'
    )
    expect(component.container).toHaveTextContent(
      'Bloogi bloo 2'
    )
    expect(component.container).toHaveTextContent(
      'Uuusi blogii'
    )
  })
})