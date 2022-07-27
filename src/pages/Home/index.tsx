import { Flex, Heading, Img, Text } from '@chakra-ui/react'

const Home = () => (
  <Flex
    bgColor="bgPrimary"
    color="white"
    width="100%"
    height="100VH"
    padding="3rem"
    textAlign="center"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    data-testid="home-wrapper"
  >
    <Img
      src="/img/icons/logo.svg"
      className="App-logo"
      alt="logo"
      height="40vmin"
      pointerEvents="none"
    />

    <Heading fontSize="4rem" marginBottom="3rem">
      Create React App <br />
      Boilerplate
    </Heading>

    <Text fontSize="2rem" fontWeight="400" marginBottom="5rem">
      TypeScript, React.js, Redux, Redux Sagas e Chakra UI
    </Text>
  </Flex>
)

export default Home
