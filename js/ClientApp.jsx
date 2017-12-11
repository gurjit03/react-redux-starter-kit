import React from 'react';
import { render } from 'react-dom';

import App from './App';

const renderApp = () => {
  render(<App />,document.querySelector('#app'));  
}


renderApp();

if(module.hot) {
  module.hot.accept('./App',() => {
    renderApp();
  })
}
