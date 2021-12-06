import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components"

const darkmode = {
  textColor: "whitesmoke",
  backgroundColor: "#000"
}

const whitemode = {
  textColor: "#000",
  backgroundColor: "whitesmoke"
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={whitemode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

