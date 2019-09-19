import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './providers/UserProvider';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>,
  document.getElementById('root')
);
