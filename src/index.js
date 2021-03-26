import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

import reportWebVitals from './reportWebVitals';

//import Home from './components/Home';
import App from './components/App';
import Home from './components/Home';

ReactDOM.render(<HashRouter>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
  </div>
</HashRouter >, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
