import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { YOUTUBE_KEY } from '../config/youtubekey';
import { getVideos } from '../actions';


export class App extends React.Component {

  render() {

    return (
      <div className="app">
        <Nav />
        <div className="col-md-7">
          <VideoPlayer />
        </div>
        <div className="col-md-5">
          <VideoList />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { getVideos } = this.props;

    getVideos('javascript', true);
  }
};

export default connect(null, {getVideos})(App);







