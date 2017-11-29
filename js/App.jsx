import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';

import '../public/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Landing} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
