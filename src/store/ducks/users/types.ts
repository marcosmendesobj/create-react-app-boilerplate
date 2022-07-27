export enum UserActionTypes {
  GET_USERS = 'GET_USERS',
  SET_USERS = 'SET_USERS'
}

export type ResponseUsersProps = {
  data: UserProps[]
}

export type UserProps = {
  id: number
  name: string
  username: string
  email: string
}

export type InitialStateProps = {
  users: UserProps[]
}
