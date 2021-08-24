import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const data = {
    content,
    votes: 0,
  }
  const response = await axios.post(baseUrl, data)
  return response.data
}

const update = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content)
  return response.data
}

const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, createNew, update, get }
