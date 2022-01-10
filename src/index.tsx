import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClientProvider, QueryClient } from "react-query"
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecoilRoot>
  </QueryClientProvider>,
  document.getElementById('root')
);

