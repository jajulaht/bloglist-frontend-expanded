import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

describe('oletusarvoisesti blogista on näkyvissä ainoastaan nimi ja kirjoittaja, ja että klikkaamalla niitä saadaan näkyviin myös muut osat blogin tiedoista', () => {
  let component
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
  const user = { username: 'testi', name: 'Testi Nimi' }
  const username = 'testi'
  const name = 'Testi Nimi'

  beforeEach(() => {
    component = render(
      <Blog blog={blog} user={user} username={username} name={name} />
    )
  })

  test('renders divs with text content', () => {
    component.container.querySelector('.head')
    component.container.querySelector('.info')
  })

  test('at start the info div is not displayed', () => {
    const div = component.container.querySelector('.info')

    expect(div).toHaveStyle('display: none')
  })

  test('after clicking the head, info is displayed', () => {
    const button = component.container.querySelector('.head')
    fireEvent.click(button)

    const div = component.container.querySelector('.info')
    expect(div).not.toHaveStyle('display: none')
  })

})