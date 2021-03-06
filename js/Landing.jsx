// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>ovideo</h1>
    <input type="text" placeholder="search" />
    <Link to="/search" className="browse-all">
      or Browse All
    </Link>
  </div>
);

export default Landing;
