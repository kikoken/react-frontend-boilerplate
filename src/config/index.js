import dotenv from 'dotenv'

dotenv.config()

export default Object.freeze({
  baseUrl: process.env.BASE_URL || 'https://randomuser.me/api/'
})
