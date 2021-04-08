const MakeApiAdapter = (client) => ({
  get: async (resource) => {
    const { data } = await client.get(resource)
    return data
  },
  post: async (resource) => {
    const { data } = await client.post(resource)
    return data
  }
})

export default MakeApiAdapter
