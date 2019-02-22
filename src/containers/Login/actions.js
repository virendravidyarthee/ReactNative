export const SET_EMAIL = "set_email";
export const SET_PASSWORD = "set_password";
export const LOG_USER_IN = "log_user_in";
export const LOGIN_USER_RESPONSE = "login_user_response";


export function setEmail(email) {
    return {type: SET_EMAIL, payload: {email}}
}

export function setPassword(password) {
    return {type: SET_PASSWORD, payload: {password}}
}

export function logUserIn(email, password) {
    return {type: LOG_USER_IN, payload: {email, password}}
}

export function loginUserResponse() {
    return{type: LOGIN_USER_RESPONSE}
}
