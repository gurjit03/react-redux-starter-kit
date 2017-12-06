import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Landing = () => (
  <div className="landing">
    <input type="text" placeholder="search" />
    <RaisedButton label="Browse All" className="browse-all" />
  </div>
);

export default Landing;
