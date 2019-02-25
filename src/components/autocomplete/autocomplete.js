import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import VideoPlayerIcon from '../../img/video-player.svg';
import SearchIcon from '../../img/search.svg';
import DefaultInput from '../defaultInput';
import ActiveInput from '../activeInput';
import Icon from '../icon';
import styles from './autocomplete.css';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: '',
      active: false,
      error: ''
    };
  }

  fetchMovies = () => {
    const { search } = this.state;
    fetch(
      `https://api.themoviedb.org/3/search/movie?` +
        `api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=` +
        `${search}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(({ results }) => results && this.addMovies(results));
  };

  addMovies = movies => {
    this.setState({
      movies: movies.length > 8 ? movies.slice(0, 8) : movies,
      error: movies.length === 0 ? 'No results found' : ''
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState(
      {
        search: value,
        active: value.length > 0,
        movies: [],
        error: value.length < 3 ? 'Search phrase must be at least 3 characters long' : ''
      },
      () => value.length > 2 && this.fetchMovies()
    );
  };

  setMovie = title => {
    this.setState({
      search: title,
      active: false,
      movies: [],
      error: ''
    });
  };

  closeActive = () => {
    this.setState({
      active: false
    });
  };

  render() {
    const { search, active, movies, error } = this.state;
    return (
      <div className={styles.content}>
        <div className={styles.searchBar}>
          <Icon SvgIcon={VideoPlayerIcon} iconClass={styles.whitePlayerIcon} />
          {!active ? (
            <DefaultInput
              showPlaceholder
              inputClassName={styles.inputDefault}
              onInputChange={this.handleChange}
              search={search}
            />
          ) : (
            <ActiveInput
              onClose={this.closeActive}
              onSet={this.setMovie}
              movies={movies}
              error={error}
              onInputChange={this.handleChange}
              search={search}
            />
          )}
        </div>
        {!active && <Icon SvgIcon={SearchIcon} iconClass={styles.searchIcon} />}
      </div>
    );
  }
}

export default hot(Autocomplete);
