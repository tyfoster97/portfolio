import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { theme } from './themes/theme'
import store from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
