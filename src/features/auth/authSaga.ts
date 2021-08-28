import { authAction, LoginPayLoad } from './authSlice';
import { fork, take, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { put } from '@redux-saga/core/effects';

function* handleLogin(payload: LoginPayLoad) {
  
  localStorage.setItem('access_token', 'fake_token');
  yield put(authAction.loginSuccess({
    id: 1,
    name: 'william nguyen',
  }));
}

function* handleLogout() {
  console.log('logout payload');
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
