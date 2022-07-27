import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import { ChakraProvider } from '@chakra-ui/react'
import Fonts from 'styles/fonts'
import theme from 'styles/theme'

import App from './App'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
)

serviceWorkerRegistration.register()
