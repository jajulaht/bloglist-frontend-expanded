import axios from 'axios'
// eslint-disable-next-line no-undef
const baseUrl = `${BACKEND_URL}/api/users`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }