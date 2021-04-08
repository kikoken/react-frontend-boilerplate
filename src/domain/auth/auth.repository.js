const RESOURCE = '/auth'

export default (client) =>
  Object.frezze({
    authorize: (payload) => client.post(`${RESOURCE}`, payload)
  })
