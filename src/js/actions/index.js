import { YOUTUBE_KEY } from '../config/youtubekey';
import { 
  FETCH_VIDEOS_ATTEMPT,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL,
  SELECT_VIDEO } from '../constants';
import axios from 'axios';

export function getVideos(query, initial) {
  const fixed = 'https://www.googleapis.com/youtube/v3/search';
  let url = fixed + '?part=snippet' + '&maxResults=5' + '&q='+ query + '&key='+ YOUTUBE_KEY;

  let thunk = async function(dispatch) {
    try {
      dispatch({type: FETCH_VIDEOS_ATTEMPT});
      const body = await fetch(url);
      const resp = await body.json();
      dispatch({type: FETCH_VIDEOS_SUCCESS, payload: resp});
      initial && dispatch({type: SELECT_VIDEO, payload: resp.items[0]});   
    } catch(e) {
      dispatch({type: FETCH_VIDEOS_FAIL, payload: e}); 
    }
  };

  thunk.meta = {
    debounce: {
      time: 1000,
      key: 'FETCH_VIDEOS'
    }
  };

  return thunk;

  // return function(dispatch) {
  //   dispatch({type: FETCH_VIDEOS_ATTEMPT});
  //   axios.get(url).then(resp=>{
  //     dispatch({type: FETCH_VIDEOS_SUCCESS, payload: resp.data});   
  //   }).catch(e=>{
  //     dispatch({type: FETCH_VIDEOS_FAIL, payload: e});   
  //   });
  // };

};

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};



