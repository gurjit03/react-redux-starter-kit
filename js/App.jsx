// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import PreloadedData from '../data.json';

import '../public/style.css';

const Error404 = () => <p style={{ color: 'white' }}>hello you have landed on wrong page </p>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={props => <Search shows={PreloadedData.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const detailedShow = PreloadedData.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={detailedShow} {...props} />;
          }}
        />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
