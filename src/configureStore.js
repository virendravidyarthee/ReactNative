import {combineReducers} from 'redux-immutable'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import login from '../src/containers/Login/reducer'
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
    login
});

const configureStore = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default configureStore
