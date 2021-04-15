import { createStructuredSelector } from 'reselect'

export const NAME = 'auth'

// Actions Types
const AUTH_SIGN_IN = '[auth]/AUTH_SIGN_IN'
const AUTH_SIGN_OUT = '[auth]/AUTH_SIGN_OUT'
const AUTH_FAILED = '[auth]/AUTH_FAILED'
const AUTH_SIGNIN_SUCCESS = '[auth]/SIGNIN_SUCCESS'
const AUTH_SIGNOUT_SUCCESS = '[auth]/SIGNOUT_SUCCESS'

// Initial State
const InitialState = {
  isLogin: false,
  isLoading: false,
  isError: false
}

// ActionTypes
export const actionTypes = {
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNOUT_SUCCESS,
  AUTH_FAILED,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT
}

// Reducers
export default function reducer(state = InitialState, action = {}) {
  switch (action.type) {
    case actionTypes.AUTH_SIGN_IN:
      return { ...state, isError: false, isLoading: true }
    case actionTypes.AUTH_SIGN_OUT:
      return { ...state, isAuth: false }
    case actionTypes.AUTH_SIGNIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true }
    case actionTypes.AUTH_SIGNOUT_SUCCESS:
      return { ...state, isLoading: false, isAuth: false }
    case actionTypes.AUTH_FAILED:
      return { ...state, isLoading: false, isError: false }
    default:
      return state
  }
}

const signin = () => ({ type: AUTH_SIGN_IN })
const signout = () => ({ type: AUTH_SIGN_OUT })
const auth = (state) => state[NAME]
export const selector = createStructuredSelector({
  auth
})

export const actionCreators = {
  signin,
  signout
}
