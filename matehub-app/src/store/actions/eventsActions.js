export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export const EVENT_CHANGE_FIELD = 'EVENT_CHANGE_FIELD';

export const CREATE_EVENT_SUBMIT = 'CREATE_EVENT_SUBMIT';
export const CREATE_EVENT_SUBMIT_SUCCESS = 'CREATE_EVENT_SUCCESS_SUBMIT';
export const CREATE_EVENT_SUBMIT_ERROR = 'CREATE_EVENT_ERROR_SUBMIT';

export const eventChangeField = (payload) => ({
  type: EVENT_CHANGE_FIELD,
  payload,
});

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

export const CreateEventSubmit = () => ({
  type: CREATE_EVENT_SUBMIT,
});

export const CreateEventSubmitSuccess = (payload) => ({
  type: CREATE_EVENT_SUBMIT_SUCCESS,
  payload,
});

export const CreateEventSubmitError = (payload) => ({
  type: CREATE_EVENT_SUBMIT_ERROR,
  payload,
});
