import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

import '../public/style.css';

const Error404 = () => <p style={{ color: 'white' }}>hello you have landed on wrong page </p>;

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
      <Route component={Error404} />
    </Switch>
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
