import axios from 'axios'
const baseUrl = '${BACKEND_URL}/api/blogs/:id/comments'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { getAll, create }