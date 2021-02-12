const { createStore } = require("redux")

import { createStore, appliMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default ({initialState}) => {
    const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(createRootReducer(), composeEnhacers(appliMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    return { store };
}