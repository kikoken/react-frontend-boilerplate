import api from 'infraestructure/api'
import client from 'infraestructure/api/axios'

// repositories
import AuthRepository from './auth.repository'

const auth = AuthRepository()

const Repository = (_client) =>
  Object.freeze({
    auth: { ...auth(_client) }
  })

export default Repository(api(client))
