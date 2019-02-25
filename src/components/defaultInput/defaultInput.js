import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultInput extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { onInputChange, search, inputClassName, showPlaceholder } = this.props;
    return (
      <input
        autoComplete="off"
        value={search}
        onChange={onInputChange}
        className={inputClassName}
        placeholder={showPlaceholder ? 'Enter movie name' : ''}
        ref={x => {
          this.input = x;
        }}
      />
    );
  }
}

DefaultInput.propTypes = {
  inputClassName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  showPlaceholder: PropTypes.bool.isRequired
};

export default hot(DefaultInput);
