import {
  GET_TOP_USERS,
  GET_TOP_USERS_SUCCESS,
  GET_TOP_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SELECTED_USER,
} from '../actions/usersActions';

export const initialState = {
  userData: {
    _user_id: '',
    _nickname: '',
    _age: '',
    _description: '',
    _avatar: '',
    _banner: '',
    _games: [
      {
        game_id: '',
        game_name: '',
        ign: {
          id: '',
          accountId: '',
          puuid: '',
          name: '',
          profileIconId: '',
          revisionDate: '',
          summonerLevel: '',
        },
        stats: {
          leagueId: '',
          queueType: '',
          tier: '',
          rank: '',
          summonerId: '',
          summonerName: '',
          leaguePoints: '',
          wins: '',
          losses: '',
          veteran: false,
          inactive: false,
          freshBlood: false,
          hotStreak: false,
        },
      },
    ],
    _event_created: [
      {
        event_id: '',
        game_name: '',
        game_id: '',
        event_time: '',
        duration: '',
        end: '',
        player_count: '',
        player_max: '',
        description: '',
        status: '',
        lang: [
          {
            id: '',
            label: '',
            icon: '',
          },
        ],
        vocal: '',
      },
    ],
    has_events: [
      {
        event_id: '',
        game_name: '',
        game_id: '',
        message: '',
        event_time: '',
        duration: '',
        end: '',
        player_count: '',
        player_max: '',
        description: '',
        status: '',
        Lang: [
          {
            id: '',
            label: '',
            icon: '',
          },
        ],
        vocal: '',
      },
    ],
  },
  // userById: {},
  topUsersList: [
    {
      _user_id: '',
      _name: '',
      _avatar: '',
      _banner: '',
      _total_events: '',
      _total_by_game: {
        cs: '',
        lol: '',
      },
    },
  ],
  error: '',
  selectedUser: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case GET_USER:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        // userById: {...action.payload},
        userData: {
          ...state.userData,
          ...action.payload,
        },
        error: '',
      };
    case GET_USER_ERROR:
      return {
        ...state,
        userData: {
          ...state.userData,
        },
        error: action.payload,
      };
    case GET_TOP_USERS:
      return {
        ...state,
      };
    case GET_TOP_USERS_SUCCESS:
      return {
        ...state,
        topUsersList: [...action.payload],
        error: '',
      };
    case GET_TOP_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        // topUsersList: [],
      };
    default:
      return state;
  }
};

// SELECTORS

/* export const getUserById = (state, id) => {
  const findUser = state.users.userData.data.find((user) => {
    return user._user_id === id;
  })
  return findUser;
} */
