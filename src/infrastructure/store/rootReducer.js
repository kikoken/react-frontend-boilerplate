import { combineReducers } from 'redux'

// reducers
import authReducer, { NAME as authName } from 'domain/auth/features'

export default () =>
  combineReducers({
    [authName]: authReducer
  })
