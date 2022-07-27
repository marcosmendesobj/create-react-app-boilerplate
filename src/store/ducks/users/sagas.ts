import * as api from 'services/api'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { usersActions } from './actions'
import { ResponseUsersProps, UserActionTypes } from './types'

function* getUsers() {
  try {
    const res: ResponseUsersProps = yield call(api.getUsers)

    yield put(usersActions.setAll(res.data))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export default all([takeEvery(UserActionTypes.GET_USERS, getUsers)])
