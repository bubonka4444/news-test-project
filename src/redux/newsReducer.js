const initialState = {
  news: [],
  filteredNews: [],
  loading: false
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NEWS':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload,
        filteredNews: action.payload,
        loading: false
      };
    case 'FILTER_NEWS':
      return {
        ...state,
        filteredNews: state.news.filter(item => item.theme === action.payload)
      };
    default:
      return state;
  }
}

export default newsReducer;