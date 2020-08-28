export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ALL_EVENTS_SUCCESS = 'GET_ALL_EVENTS_SUCCESS';
export const GET_ALL_EVENTS_ERROR = 'GET_ALL_EVENTS_ERROR';

export const GET_EVENT_BY_ID = 'GET_EVENT_BY_ID';
export const GET_EVENT_BY_ID_SUCCESS = 'GET_EVENT_BY_ID_SUCCESS';
export const GET_EVENT_BY_ID_ERROR = 'GET_EVENT_BY_ID_ERROR';

export const CREATE_EVENT_SUBMIT = 'CREATE_EVENT_SUBMIT';
export const CREATE_EVENT_SUBMIT_SUCCESS = 'CREATE_EVENT_SUBMIT_SUCCESS';
export const CREATE_EVENT_SUBMIT_ERROR = 'CREATE_EVENT_SUBMIT_ERROR';

export const EVENT_CHANGE_FIELD = 'EVENT_CHANGE_FIELD';

export const GET_SELECTED_EVENT = 'GET_SELECTED_EVENT'

export const getSelectedEvent = (payload) => ({
  type: GET_SELECTED_EVENT,
  payload,
});

export const getAllEvents = () => ({
  type: GET_ALL_EVENTS,
});

export const getAllEventsSuccess = (payload) => ({
  type: GET_ALL_EVENTS_SUCCESS,
  payload
});

export const getAllEventsError = (payload) => ({
  type: GET_ALL_EVENTS_ERROR,
  payload
});


export const getEventById = () => ({
  type: GET_EVENT_BY_ID
});

export const getEventByIdSuccess = (payload) => ({
  type: GET_EVENT_BY_ID_SUCCESS,
  payload,
});

export const getEventByIdError = (payload) => ({
  type: GET_EVENT_BY_ID_ERROR,
  payload,
});


export const CreateEventSubmit = () => ({
  type: CREATE_EVENT_SUBMIT,
});

export const CreateEventSubmitSuccess = () => ({
  type: CREATE_EVENT_SUBMIT_SUCCESS,
});

export const CreateEventSubmitError = (payload) => ({
  type: CREATE_EVENT_SUBMIT_ERROR,
  payload,
});


export const eventChangeField = (payload) => ({
  type: EVENT_CHANGE_FIELD,
  payload,
});
