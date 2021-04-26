const initialState = {
  allTeams: [
    {
      id: 1,
      name: "team 1",
      description: "Description of team 1",
      pokemon: "Quilava, Totodile, Chikorita",
      chosen: 15,
    },
    {
      id: 2,
      name: "team 2",
      description: "Description of team 2",
      pokemon: ["torchic", "mudkip", "dioporco"],
      chosen: 20,
    },
    {
      id: 3,
      name: "team 3",
      description: "Description of team 3",
      pokemon: "bulbasaur, charmender, squirtle",
      chosen: 25,
    },
    
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "teams/add": {
      return {
        ...state,
        allTeams: [
          ...state.allTeams,
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
