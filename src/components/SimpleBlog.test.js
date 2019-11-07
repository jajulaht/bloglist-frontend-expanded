import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('testi, joka varmistaa, että komponentti renderöi blogin titlen, authorin ja likejen määrän', () => {
  const blog = {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 15,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5da977807018d0092470b146'
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  component.debug()
  //console.log(prettyDOM()) // Jos haluaa tulostaa pienemmän osan

  const div = component.container.querySelector('.head')
  expect(div).toHaveTextContent(
    'Second class tests, version 1.0'
  )
  const div2 = component.container.querySelector('.head')
  expect(div2).toHaveTextContent(
    'Robert Crumb'
  )
  const div3 = component.container.querySelector('.info')
  expect(div3).toHaveTextContent(
    'blog has 15 likes'
  )
})

test('clicking twice the button calls event handler twice', async () => {
  const blog = {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 15,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5da977807018d0092470b146'
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})