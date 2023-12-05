import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { RatingsProvider } from 'components/RatingsContext/RatingsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RatingsProvider>
      <App />
    </RatingsProvider>
  </React.StrictMode>
);
