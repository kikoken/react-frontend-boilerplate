import dotenv from 'dotenv'

dotenv.config()

export default Object.freeze({
  baseUrl: process.env.REACT_APP_API_ROOT || 'https://randomuser.me/api/'
})
