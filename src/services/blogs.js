import axios from 'axios'
// eslint-disable-next-line no-undef
const baseUrl = `${BACKEND_URL}/api/blogs`

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
    console.log('response', response.data)
    return response.data
  })
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  console.log('token', config)
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteThis =  async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.status
}

export default { getAll, create, update, setToken, deleteThis }