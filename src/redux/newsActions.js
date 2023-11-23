import axios from 'axios';

export const fetchNews = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_NEWS' });
    axios.get('http://localhost:3000/news')
      .then(response => {
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data });
      })
  };
};

export const filterNews = theme => {
  return {
    type: 'FILTER_NEWS',
    payload: theme
  };
};