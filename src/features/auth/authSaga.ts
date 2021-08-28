import { authAction, LoginPayLoad } from './authSlice';
import { fork, take, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield delay(1000);

    localStorage.setItem('access_token', 'fake_token');
    yield put(authAction.loginSuccess({
      id: 1,
      name: 'william nguyen',
    }));
    // redirect to admin page
    yield put(push('/admin'));
   
  } catch (error) {
    yield put(authAction.loginFailed(error.message));
  }

}

function* handleLogout() {
  yield delay(500);
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
