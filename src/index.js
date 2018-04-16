// this way not work yet //


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>
//   , document.getElementById('root'));

