import api from 'infrastructure/api'
import client from 'infrastructure/api/axios'

// repositories
import AuthRepository from 'domain/auth/auth.repository'

const Repository = (_client) =>
  Object.freeze({
    auth: { ...AuthRepository(_client) }
  })

export default Repository(api(client))
