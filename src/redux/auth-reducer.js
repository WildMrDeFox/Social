import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const auth = () => async (dispatch) => {
    let response = await headerAPI.auth()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await headerAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(auth())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Email или пароль введенны неверно."
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await headerAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;