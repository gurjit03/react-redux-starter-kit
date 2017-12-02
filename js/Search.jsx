import React, { Component } from 'react';

import PreloadedData from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: 'game',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(e) {
    e.preventDefault();
    this.setState({
      searchValue: e.target.value,
    });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>Svideo</h1>
          <input type="text" placeholder="Search" onChange={this.handleSearchChange} value={this.state.searchValue} />
        </header>
        <div>
          {PreloadedData.shows
            .filter(
              show =>
                `${show.description} ${show.title}`.toUpperCase().indexOf(this.state.searchValue.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
