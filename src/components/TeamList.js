import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectTeams } from "../store/teams/selectors";
import { useDispatch } from "react-redux";
import {toggleFavorite} from "../store/user/action"

export default function TeamList(props) {
  const user = useSelector(selectUser);
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch()
  console.log("my team", teams);




function isPokemonDefined(e){
  return(e.pokemon === "" ? "no pokemons" : e.pokemon.join('. '))
}




  
  return (
    <div>
      <h1>Team Builder</h1>
      <p>My name {user.name}</p> <p>How many teams I have: {teams.length}</p>
      {teams.map((e) => (
        <p>
          <li key={e.id}>
            {e.description} | {isPokemonDefined(e)}|  {e.name}
          </li>
        </p>
      ))}
      <ul>
        {teams.map((teams) => (
          <li key={teams.id}>
            <button
              onClick={() => {
                dispatch(toggleFavorite(teams.id));
              }}
            >
              {user.favorites.includes(teams.id) ? "♥" : "♡"}
            </button>
            <strong>{teams.name}</strong> ({teams.description}) <br />
            <em>chosen {teams.chosen} times</em>
          </li>
        ))}
      </ul>



    </div>
  );
}
