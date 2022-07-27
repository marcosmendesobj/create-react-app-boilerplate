import { UserActionTypes, InitialStateProps, UserProps } from './types'

type ActionProps = {
  type: string
  payload: UserProps[]
}

const initialState: InitialStateProps = {
  users: []
}

export const usersReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case UserActionTypes.SET_USERS: {
      return { ...state, users: action.payload }
    }

    default:
      return state
  }
}
