import { UserActionTypes, UserProps } from './types'

export const usersActions = {
  getAll: () => ({ type: UserActionTypes.GET_USERS }),

  setAll: (users: UserProps[]) => ({
    type: UserActionTypes.SET_USERS,
    payload: users
  })
}
