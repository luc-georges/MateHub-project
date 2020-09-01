// == GET ALL EVENTS
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ALL_EVENTS_SUCCESS = 'GET_ALL_EVENTS_SUCCESS';
export const GET_ALL_EVENTS_ERROR = 'GET_ALL_EVENTS_ERROR';

// == GET EVENT BY ID
export const GET_EVENT_BY_ID = 'GET_EVENT_BY_ID';
export const GET_EVENT_BY_ID_SUCCESS = 'GET_EVENT_BY_ID_SUCCESS';
export const GET_EVENT_BY_ID_ERROR = 'GET_EVENT_BY_ID_ERROR';

// == CREATE EVENT
export const CREATE_EVENT_SUBMIT = 'CREATE_EVENT_SUBMIT';
export const CREATE_EVENT_SUBMIT_SUCCESS = 'CREATE_EVENT_SUBMIT_SUCCESS';
export const CREATE_EVENT_SUBMIT_ERROR = 'CREATE_EVENT_SUBMIT_ERROR';
export const EVENT_CHANGE_FIELD = 'EVENT_CHANGE_FIELD';
export const APPLY_EVENT_CHANGE_FIELD = 'APPLY_EVENT_CHANGE_FIELD';
export const FLAG_CHECKBOX_CHANGE_FIELD = 'FLAG_CHECKBOX_CHANGE_FIELD';
export const ISRANKED_CHECKBOX_CREATE_EVENT_CHANGE_FIELD = 'ISRANKED_CHECKBOX_CREATE_EVENT_CHANGE_FIELD';

// == SELECT EVENT AT CLICK
export const GET_SELECTED_EVENT = 'GET_SELECTED_EVENT';

// == APPLY EVENT
export const SELECT_PLAYER_TO_ACCEPT_OR_REFUSE_IN_EVENT = 'SELECT_PLAYER_TO_ACCEPT_OR_REFUSE_IN_EVENT';
export const APPLY_TO_EVENT = 'APPLY_TO_EVENT';
export const APPLY_TO_EVENT_SUCCESS = 'APPLY_TO_EVENT_SUCCESS';
export const APPLY_TO_EVENT_ERROR = 'APPLY_TO_EVENT_ERROR';
export const APPLY_ACCEPT = 'APPLY_ACCEPT';
export const APPLY_REFUSE = 'APPLY_REFUSE';

// == DELETE EVENT
export const DELETE_EVENT = 'DELETE_EVENT';

// == SEARCH EVENT
export const SEARCH_EVENT_CHANGE_FIELD = 'SEARCH_EVENT_CHANGE_FIELD';
export const SEARCH_EVENT_SUBMIT = 'SEARCH_EVENT_SUBMIT';
export const SEARCH_EVENT_SUBMIT_SUCCESS = 'SEARCH_EVENT_SUBMIT_SUCCESS';
export const SEARCH_EVENT_SUBMIT_ERROR = 'SEARCH_EVENT_SUBMIT_ERROR';
export const ISRANKED_CHECKBOX_SEARCH_EVENT_CHANGE_FIELD = 'ISRANKED_CHECKBOX_SEARCH_EVENT_CHANGE_FIELD';
export const RESET_ALL_FILTERS = "RESET_ALL_FILTERS";



// ****** ACTION CREATORS

// == SEARCH EVENT
export const searchEventChangeField = (payload) => ({
  type: SEARCH_EVENT_CHANGE_FIELD,
  payload,
});

export const searchEventSubmit = () => ({
  type: SEARCH_EVENT_SUBMIT,
});

export const searchEventSubmitSuccess = () => ({
  type: SEARCH_EVENT_SUBMIT_SUCCESS,
});

export const searchEventSubmitError = () => ({
  type: SEARCH_EVENT_SUBMIT_ERROR,
});

export const isRankedCheckboxSearchEventChangeField = (payload) => ({
  type: ISRANKED_CHECKBOX_SEARCH_EVENT_CHANGE_FIELD,
  payload,
})

export const resetAllFilters = () => ({
  type: RESET_ALL_FILTERS,
})

// == GET ALL EVENTS
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

// == GET EVENT BY ID
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

// == CREATE EVENT
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

export const flagCheckboxChangeField = (payload) => ({
  type: FLAG_CHECKBOX_CHANGE_FIELD,
  payload,
});

export const isRankedCheckboxCreateEventChangeField = (payload) => ({
  type: ISRANKED_CHECKBOX_CREATE_EVENT_CHANGE_FIELD,
  payload,
});

// == INPUT CHANGE
export const eventChangeField = (payload) => ({
  type: EVENT_CHANGE_FIELD,
  payload,
});

export const applyEventChangeField = (payload) => ({
  type: APPLY_EVENT_CHANGE_FIELD,
  payload,
});

// == SELECT EVENT AT CLICK
export const getSelectedEvent = (payload) => ({
  type: GET_SELECTED_EVENT,
  payload,
});



// == APPLY EVENT
export const selectPlayerToAcceptOrRefuseInEvent = (payload) => ({
  type: SELECT_PLAYER_TO_ACCEPT_OR_REFUSE_IN_EVENT,
  payload,
});

export const applyAccept = () => ({
  type: APPLY_ACCEPT,
});

export const applyRefuse = () => ({
  type: APPLY_REFUSE,
}); 

export const applyToEvent = (payload) => ({
  type: APPLY_TO_EVENT,
  payload,
});

export const applyToEventSuccess = (payload) => ({
  type: APPLY_TO_EVENT_SUCCESS,
  payload,
});

export const applyToEventError = () => ({
  type: APPLY_TO_EVENT_ERROR,
});

// == DELETE EVENT

export const deleteEvent = () => ({
  type: DELETE_EVENT,
})
