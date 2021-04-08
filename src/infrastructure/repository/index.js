import api from 'infrastructure/api'
import client from 'infrastructure/api/axios'

// repositories
import AuthRepository from 'domain/auth/auth.repository'

const auth = AuthRepository()

const Repository = (_client) =>
  Object.freeze({
    auth: { ...auth(_client) }
  })

export default Repository(api(client))
