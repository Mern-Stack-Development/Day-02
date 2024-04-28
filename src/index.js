import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';

const theme = {
  colors: {
    primary: 'red',
    secondary: 'green',
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Roboto, sans-serif',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
