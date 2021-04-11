import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from './rootReducer'
import rootSaga from './rootSaga'

export default ({ initialState }) => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(createRootReducer(), composeEnhacers(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)

  return { store }
}
