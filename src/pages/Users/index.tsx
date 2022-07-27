import { Flex, Heading } from '@chakra-ui/react'
import { usersActions } from 'store/ducks/users/actions'
import { RootState, useAppDispatch, useAppSelector } from 'store'

const Users = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state: RootState) => state.usersState)

  dispatch(usersActions.getAll())

  return (
    <Flex>
      <Heading>Lista de Usuarios</Heading>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </Flex>
  )
}

export default Users
