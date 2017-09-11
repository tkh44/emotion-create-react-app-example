import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
