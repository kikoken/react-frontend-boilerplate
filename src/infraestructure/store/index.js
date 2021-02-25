import configureStore from './configureStore'

const initialState = {}
let store = null

export default () => {
  if (store === null) {
    const result = configureStore({ initialState })
    store = result.store
  }

  return { store }
}
