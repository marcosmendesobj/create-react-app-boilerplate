import { all } from 'redux-saga/effects'

import users from './users/sagas'

export default function* rootSaga(): Generator<any> {
  return yield all([users])
}
