import axios from 'axios'
// eslint-disable-next-line no-undef
const baseUrl = `${BACKEND_URL}/api/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }