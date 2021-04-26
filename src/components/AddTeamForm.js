import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeams } from "../store/teams/actions";
export default function AddTeamForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pokemon, setPokemon] = useState("");

  //---- dispatch & form reset after dispatch
  const submit = (event) => {
    event.preventDefault();

    dispatch(
      addTeams({
        name,
        description,
        pokemon,
      })
    );

    setName("");
    setDescription("");
    setPokemon("");
  };




  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add a new team!</h2>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Description:{" "}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </p>
        <p></p>
        <p>
          <label>
            pokemon:{" "}
            <input
              type="text"
              value={pokemon}
              onChange={(e) => setPokemon(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Add this team!</button>
        </p>
      </form>
    </div>
  );
}
