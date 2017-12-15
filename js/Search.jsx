// @flow

import React, { Component } from 'react';

import ShowCard from './ShowCard';
//
// type Props = {
//   history: RouterHistory,
//   location: Location,
//   match: Match,
// };
//
// type State = {
//   searchValue: string,
// };

class Search extends Component {
  state = {
    searchValue: '',
  };
  props: {
    shows: Array<Show>,
  };
  handleSearchChange = (e: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    // e.preventDefault();
    this.setState({
      searchValue: e.target.value,
    });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>Svideo</h1>
          <input
            type="text"
            className="filter-movies"
            placeholder="Search"
            onChange={this.handleSearchChange}
            value={this.state.searchValue}
          />
        </header>
        <div>
          {this.props.shows
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
