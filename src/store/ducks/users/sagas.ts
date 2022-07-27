import * as api from 'services/api'
import { all, call, put, takeEvery } from 'redux-saga/effects'

import { ResponseUsersProps, usersActions } from '.'

function* getUsers() {
  try {
    const res: ResponseUsersProps = yield call(api.getUsers)

    yield put(usersActions.setAll(res.data))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

export default all([takeEvery('SAGAS_GET_USERS', getUsers)])
