import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action){
    yield delay(action.expirationTime);
    yield put(actions.logout());
}

export function* authUserSaga(action){
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAejuIPBOhTYoxmIdhdH_hI8mvyCSF6PSM';
    if (!action.isSignup){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAejuIPBOhTYoxmIdhdH_hI8mvyCSF6PSM';
    } try {
    const response = yield axios.post(url, authData)    
            const expirationDate = yield new Date (new Date().getTime() + response.data.expiresIn * 1000)
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', response.data.localId)
            yield put(actions.authSuccess(response.data.idToken, response.data.localId));
            yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error){
        yield put(actions.authFail(error.response.data.error));
    }   
}