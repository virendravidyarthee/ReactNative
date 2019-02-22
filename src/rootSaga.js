import {fork} from 'redux-saga/effects'
import loginSaga from './containers/Login/saga'


export default function* rootSaga() {
    yield fork(loginSaga);
}
