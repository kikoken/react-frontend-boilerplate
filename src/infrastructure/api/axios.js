import axios from 'axios'
import config from '../../config'

const instance = axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
