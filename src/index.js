import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoriteContextProvider } from './store/favorite-context';

ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FavoriteContextProvider>
  ,
  document.getElementById('root')
);
