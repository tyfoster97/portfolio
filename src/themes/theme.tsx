import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: 'bold',
      },
    },
  },
  palette: {
    primary: {
      main: '#127893',
    },
    secondary: {
      main: '#642900',
    },
    success: {
      main: '#92c0a3',
    },
    warning: {
      main: '#e8d162',
    },
    error: {
      main: '#e8695d',
    },
    info: {
      main: '#555',
    },
  },
})

export const miscColors = {
  coffee: '#c0ffee',
  hawks: '#69be28',
  tardis: '#003b6f',
}
