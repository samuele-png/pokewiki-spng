const initialState = {
  myTeam: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "teams/add": {
      return {
        ...state,
        myTeam: [
          ...state.myTeam,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            pokemon: action.payload.pokemon,
            chosen: 0,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
}
