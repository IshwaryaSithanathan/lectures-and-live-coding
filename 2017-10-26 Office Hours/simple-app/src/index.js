import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App startingText="happy birthday" />
  , document.getElementById('root'));
registerServiceWorker();
