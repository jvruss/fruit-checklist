import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// State
import store from './state';

// Core
import App from './core/App';
import * as serviceWorker from './core/serviceWorker';

// Styles
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
