export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';

export const getNews = () => ({
  type: GET_NEWS,
})

export const getNewsSuccess = (payload) => ({
  type: GET_NEWS_SUCCESS,
  payload
})

export const getNewsError = (payload) => ({
  type: GET_NEWS_ERROR,
  payload
})
