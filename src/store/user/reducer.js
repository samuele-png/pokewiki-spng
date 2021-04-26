const initialState = {
  name: "Samuele",
  id: 42,
  favorites: [1, 3],
};

export default function reducer(state = initialState, action) {
  
  switch (action.type) {
    case "user/toggleFavorite": {
      const id = action.payload;

      const favorites = state.favorites.includes(id) // check if we already have it
        ? state.favorites.filter((f) => f !== id) // remove
        : [...state.favorites, id]; // add
        

      return {
        ...state,
        favorites,
      };
    }
    default: {
      return state;
    }
  }
}
