import { Flex, Heading, List, ListItem } from '@chakra-ui/react'
import { usersActions } from 'store/ducks/users/actions'
import { RootState, useAppDispatch, useAppSelector } from 'store'

const Users = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state: RootState) => state.usersState)

  dispatch(usersActions.getAll())

  return (
    <Flex
      bg="bgPrimary"
      color="white"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="2rem"
      textAlign="center"
    >
      <Heading fontSize="4rem">Lista de Usuarios</Heading>

      <List fontSize="2rem">
        {users.map((user, index) => (
          <ListItem key={index}>{user.name}</ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default Users
