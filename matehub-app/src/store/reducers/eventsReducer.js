import { GET_EVENTS } from '../actions/eventActions';

export const initialState = {
  list: [
    {
      id: 1,
      user_id: 1,
      game_id: 1,
      event_time: '2020-08-22 09:00:00',
      duration: '04:00',
      player_count: 5,
      description: 'Competitif full team',
      status: 0,
      vocal: 'discord.gg/invitenumber',
    },
    {
      id: 2,
      user_id: 2,
      game_id: 2,
      event_time: '2020-08-22 09:00:00',
      duration: '04:00',
      player_count: 2,
      description: 'En duo Q sur matehub En duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehubEn duo Q sur matehub',
      status: 3,
      vocal: 'discord.gg/invitenumber',
    },
    {
      id: 3,
      user_id: 2,
      game_id: 2,
      event_time: '2020-08-22 09:00:00',
      duration: '04:00',
      player_count: 2,
      description: 'En duo Q sur matehub',
      status: 3,
      vocal: 'discord.gg/invitenumber',
    },
    {
      id: 4,
      user_id: 2,
      game_id: 2,
      event_time: '2020-08-22 09:00:00',
      duration: '04:00',
      player_count: 2,
      description: 'En duo Q sur matehub',
      status: 3,
      vocal: 'discord.gg/invitenumber',
    },
    {
      id: 5,
      user_id: 2,
      game_id: 2,
      event_time: '2020-08-22 09:00:00',
      duration: '04:00',
      player_count: 2,
      description: 'En duo Q sur matehub',
      status: 3,
      vocal: 'discord.gg/invitenumber',
    },
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
      }
    default:
      return state;
  }
}

// export default eventsReducer;
