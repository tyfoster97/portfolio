import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 'bold'
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: 'bold'
      }
    }
  },
  palette: {
    misc: {
      coffee: '#c0ffee',
      hawks: '#69be28',
      tardis: '#003b6f',
    },
    primary: { 
      main: '#5bbcff',
      background: '#555',
      text: '#f0f0f0'
    },
    secondary: {
      main: '#642900'
    }
  }
})