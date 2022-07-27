import React from 'react'
import store from 'store'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'

export const renderAll = (children: React.ReactNode): RenderResult =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </BrowserRouter>
    </Provider>
  )
