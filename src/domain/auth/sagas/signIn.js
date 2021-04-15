import { call, put } from 'redux-saga/effects'

// api
import Repository from 'infrastructure/repository'

// actions
import { actionTypes as authActions } from '../features'

export default function* tryAuthSignIn() {
  try {
    const data = yield call(
      Repository.auth.authorize({ usename: 'email@email.com', password: '12345678' })
    )
    yield put({ type: authActions.AUTH_SIGN_IN, data })
  } catch (error) {
    yield put({ type: authActions.AUTH_FAILED, message: error.message })
  }
}
