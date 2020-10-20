import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { unstable_createMuiStrictModeTheme, ThemeProvider, } from '@material-ui/core/styles';

import MontserratTtf from './styles/fonts/Montserrat-Regular.ttf';

const Montserrat = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: `
    local(''Montserrat', sanse serif'),
    local('Montserrat', sanse serif),
    url(${MontserratTtf}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = unstable_createMuiStrictModeTheme({
  palette: {
      type: 'light',
      primary: {
          main: "#2B394A",
          light: "#f0f1f3",
      },
      secondary: {
          main: "#FDA5A4",
          light: "#f2f6fb",
      },
  },
  typography: {
      fontFamily: `'Montserrat', sanse serif`,
  },
  overrides: {
      MuiCssBaseline: {
          '@global': {
              '@font-face': [Montserrat],
          },
      },
  },
});

ReactDOM.render( 
  <React.StrictMode>
  <Provider store = { store } > 
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <App /> 
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
