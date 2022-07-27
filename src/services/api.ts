import axios from 'axios'
import { User } from 'store/ducks/users'

/**
 * define your base url here
 *
 * const baseURL = 'http://localhost:5000/api'
 * axios.defaults.baseURL = baseURL
 */

export const getUsers = async () =>
  await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
