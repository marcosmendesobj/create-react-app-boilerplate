import axios from 'axios'

/**
 * define your base url here
 *
 * const baseURL = 'http://localhost:5000/api'
 * axios.defaults.baseURL = baseURL
 */

export const getUsers = async () =>
  await axios.get('https://jsonplaceholder.typicode.com/users')
