import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="search" />
        <button className="browse-all">or Browse All</button>
      </div>
    );
  }
}

export default Landing;
