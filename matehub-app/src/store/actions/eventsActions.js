
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export const getEvents = () => ({
  type: GET_EVENTS,
})

export const getEventsSuccess = (payload) => ({
  type: GET_EVENTS_SUCCESS,
  payload
})

export const getEventsError = (payload) => ({
  type: GET_EVENTS_ERROR,
  payload
})
