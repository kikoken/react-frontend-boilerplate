import dotenv from 'dotenv'
import { object } from 'prop-types'

dotenv.config()

export default object.freeze({
  baseUrl: process.env.BASE_URL || 'http://localhost:5000'
})
