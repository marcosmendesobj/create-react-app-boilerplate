export type User = {
  id: number
  name: string
  username: string
  email: string
}

type ActionProps =
  | {
      type: 'SET_USERS'
      payload: User[]
    }
  | {
      type: 'SAGAS_GET_USERS'
    }

export type ResponseUsersProps = {
  data: User[]
}

const initialState = {
  users: [] as User[]
}

export const usersActions = {
  getAll: () => ({ type: 'SAGAS_GET_USERS' }),
  setAll: (users: User[]) => ({
    type: 'SET_USERS',
    payload: users
  })
}

export const usersReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case 'SET_USERS': {
      return { ...state, users: action.payload }
    }

    default:
      return state
  }
}
