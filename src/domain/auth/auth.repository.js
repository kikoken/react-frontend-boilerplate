const RESOURCE = '/auth'

export default (client) =>
  Object.freeze({
    authorize: (payload) => client.post(`${RESOURCE}`, payload)
  })
