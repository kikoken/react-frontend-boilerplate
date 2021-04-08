import { takeLatest } from 'redux-saga/effects'

// actions
import { actionCreators as authActions } from 'domain/auth/features'

// Sagas
import tryAuthSignIn from 'domain/auth/sagas/signIn'

export default function* rootSaga() {
  yield takeLatest(authActions.signIn, tryAuthSignIn)
}
