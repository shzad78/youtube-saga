import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.localHandler = this.localHandler.bind(this);
  }

  localHandler(e) {
    const { getVideos } = this.props;

    this.setState({ value: e.target.value });
    getVideos(e.target.value);
  }

  render() {
    return (
      <div className="search col-md-6 col-md-offset-4 form-inline">
        <input
          type="text"
          className="form-control"
          onChange={this.localHandler}
          value={this.state.value}
        />
        <button className="btn">
          <span className="glyphicon glyphicon-search " />
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  getVideos: PropTypes.func.isRequired
};
