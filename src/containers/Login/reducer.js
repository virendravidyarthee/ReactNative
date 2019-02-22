import {fromJS} from "immutable";
import {LOG_USER_IN, LOGIN_USER_RESPONSE, SET_EMAIL, SET_PASSWORD,} from "./actions";

const initialState = fromJS({
    isLoading: false,
    email: '',
    password: ''
});

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_USER_IN:
            return state.set('isLoading', true);

        case SET_EMAIL:
            return state
                .set('email', action.payload.email);

        case SET_PASSWORD:
            return state
                .set('password', action.payload.password);

        case LOGIN_USER_RESPONSE:
            return state.set('isLoading', false);

        default:
            return state
    }
};

export function getEmail(state) {
    return state.get('login').get('email')
}

export function getPassword(state) {
    return state.get('login').get('password')
}

export function isLoading(state) {
    return state.get('login').get('isLoading')
}
