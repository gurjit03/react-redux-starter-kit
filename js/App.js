import React from 'react'
import ReactDOM from 'react-dom'

import '../public/style.css'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>svideo</h1>
          <input type='text' placeholder='search' />
          <button className='browse-all'>or Browse All</button>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'))
