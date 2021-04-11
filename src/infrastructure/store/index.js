import configureStore from './configureStore'

const initialState = {}
let store = null

const Store = () => {
  if (store === null) {
    const result = configureStore({ initialState })
    store = result.store
  }

  return { store }
}

export default Store
