export const addTeams = ({ name, description, pokemon }) => ({
    type: "teams/add",
    payload: {
      name,
      description,
      pokemon,
      id: Math.random()*101|0
    },
  });