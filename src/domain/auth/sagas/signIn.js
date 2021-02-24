import { call, put } from 'redux-saga/effects';

// actions
import { actionTypes as authActions } from '../features';

export default function* tryAuthSignIn() {
  try {
    const data = {};
    yield put({ type: authActions.AUTH_SIGN_IN, data });
  } catch (error) {
    yield put({ type: authActions.AUTH_FAILED, message: error.message });
  }
}
