import { Button as ChakraButton, Text } from '@chakra-ui/react'

type ButtonProps = {
  title: string
}

const Button = ({ title }: ButtonProps) => (
  <ChakraButton bg="blue" w={20} h={20} borderRadius={10}>
    <Text color="white" fontWeight="bold" fontSize="1.5em">
      {title}
    </Text>
  </ChakraButton>
)

export default Button
