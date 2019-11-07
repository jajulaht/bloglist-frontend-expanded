const blogs = [
  {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 14,
    user: {
      username: 'root',
      id: '5da5c555ea2b25e18c098831'
    },
    id: '5da974f70851a1f371ea70ec'
  },
  {
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
  },
  {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 13,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5da977a87018d0092470b147'
  },
  {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 15,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5da97aeaa02a180fb20080e0'
  },
  {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 13,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5da97b5e01df58108a03837e'
  },
  {
    title: 'Second class tests, version 1.0',
    author: 'Robert Crumb',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html',
    likes: 19,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5da97be77a3c0111afa9db3e'
  },
  {
    title: 'Bloogi bloo 2',
    author: 'Jussi Juonio',
    url: 'www.yle.fi',
    likes: 6,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5db329e2f7bff3fb59ed1754'
  },
  {
    title: 'Uuusi blogii',
    author: 'Simo Seiväs',
    url: 'www.yle.fi',
    likes: 4,
    user: {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      id: '5da5c555ea2b25e18c098832'
    },
    id: '5db32fffbdb83f06eb256ebc'
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = newToken => {
  jest.fn()
  console.log(newToken)
  //token = `bearer ${newToken}`
}

export default { getAll, setToken }