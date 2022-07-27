import { combineReducers } from 'redux'
import { usersReducer } from './users'

const rootReducer = combineReducers({
  usersState: usersReducer
})

export default rootReducer
