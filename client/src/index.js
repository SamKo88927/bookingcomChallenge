import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';
import { OptionsContextProvider } from './context/OptionsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OptionsContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </OptionsContextProvider>
  </React.StrictMode>
);


