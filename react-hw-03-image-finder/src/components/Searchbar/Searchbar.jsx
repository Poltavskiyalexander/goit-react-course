import React, { Component } from 'react';
class Searchbar extends Component {
  state = {
    qwery: '',
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.qwery);
    this.setState({ qwery: '' });
  };

  changeHandler = event => {
    this.setState({ qwery: event.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.submitHandler} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeHandler}
            value={this.state.qwery}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
