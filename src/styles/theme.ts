import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Source Sans Pro, sans-serif',
    body: 'Source Sans Pro, sans-serif'
  },
  colors: {
    bgPrimary: '#282c34',
    black: '#000000'
  },
  styles: {
    global: {
      'html, body': {
        height: '100%'
      },
      ul: {
        listStyleType: 'none'
      },
      '.rotate180': {
        transform: 'rotate(180deg)'
      }
    }
  }
})

export default theme
