import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Core
import App from './core/App';
import * as serviceWorker from './core/serviceWorker';

// Styles
import './styles/_index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
