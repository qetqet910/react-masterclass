import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { darktheme, whitetheme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={whitetheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

