import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];

const createAppropriateStore = createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
