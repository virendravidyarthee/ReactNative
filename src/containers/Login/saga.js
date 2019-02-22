import {all, takeLatest, put, delay} from 'redux-saga/effects'
import {LOG_USER_IN} from "./actions";
import {Navigation} from "react-native-navigation";
import {loginUserResponse} from "./actions";

function* loginUser(action) {
    yield delay(2000);
    if (isCorrectCredential(action)) {
        launchSuccessScreen(action.payload.email)
    } else {
        alert('Invalid credentials')
    }

    yield put(loginUserResponse())
}

function launchSuccessScreen(email) {
    Navigation.push('assignment-stack', {
        component: {
            name: 'navigation.assignment.success',
            passProps: {
                email: email
            }
        }
    });
}

function isCorrectCredential(action) {
    return action.payload.email === 'bill_gates@microsoft.com' && action.payload.password === '123456'
}

export default function* loginSaga() {
    yield all([takeLatest(LOG_USER_IN, loginUser)])
}
