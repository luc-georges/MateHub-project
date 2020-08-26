import {
  GET_TOP_USERS,
  GET_TOP_USERS_SUCCESS,
  GET_TOP_USERS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SELECTED_USER,
} from '../actions/usersActions';
import { StatisticLabel } from 'semantic-ui-react';

export const initialState = {
  userData: {},
  // userData: {
  //   data: {
  //     _user_id: 1,
  //     _nickname: 'test1login',
  //     _age: 33,
  //     _description: ' ',
  //     _avatar: 'avatar1.png',
  //     _banner: 'banner1.png',
  //     _games: [
  //       {
  //         game_id: 1,
  //         game_name: 'Counter Strike GO',
  //         ign: {
  //           id: 'IGN3',
  //         },
  //         stats: null,
  //       },
  //     ],
  //     _event_created: [
  //       {
  //         event_id: 1,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         event_time: '2020-08-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-08-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //           {
  //             id: 2,
  //             label: 'En',
  //             icon: 'en.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         event_id: 3,
  //         game_name: 'League of legend',
  //         game_id: 2,
  //         event_time: '2020-10-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-10-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         lang: null,
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         event_id: 2,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         event_time: '2020-10-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-10-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         event_id: 4,
  //         game_name: 'League of legend',
  //         game_id: 2,
  //         event_time: '2020-08-16T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-08-16T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 10,
  //         description: 'Duo Q',
  //         status: 3,
  //         lang: null,
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //     ],
  //     has_events: [
  //       {
  //         id: 1,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         message:
  //           'Hey mate, i would love to participate! Check my profile ! from id 2',
  //         event_time: '2020-10-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-10-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         Lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         id: 3,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         message:
  //           'Hey mate 2eme, i would love to participate! Check my profile ! from id 1 ',
  //         event_time: '2020-08-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-08-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         Lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //           {
  //             id: 2,
  //             label: 'En',
  //             icon: 'en.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         id: 4,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         message:
  //           'Hey mate 2eme, i would love to participate! Check my profile ! from id 2',
  //         event_time: '2020-10-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-10-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         Lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         id: 6,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         message:
  //           'Hey mate 3eme, i would love to participate! Check my profile ! from id 1 ',
  //         event_time: '2020-08-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-08-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         Lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //           {
  //             id: 2,
  //             label: 'En',
  //             icon: 'en.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //       {
  //         id: 7,
  //         game_name: 'Counter Strike GO',
  //         game_id: 1,
  //         message:
  //           'Hey mate 3eme, i would love to participate! Check my profile ! from id 2',
  //         event_time: '2020-10-22T09:00:00+02:00',
  //         duration: '04:00:00',
  //         end: '2020-10-22T13:00:00+02:00',
  //         player_count: 1,
  //         player_max: 5,
  //         description: 'Compétitif full team',
  //         status: 0,
  //         Lang: [
  //           {
  //             id: 1,
  //             label: 'Fr',
  //             icon: 'fr.png',
  //           },
  //         ],
  //         vocal: 'discord.gg/invitenumber',
  //       },
  //     ],
  //   },    
  // },
  topUsersList: [],
  error: '',
  selectedUser: "",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      }
    case GET_USER:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
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
