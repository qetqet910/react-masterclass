import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme';
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

