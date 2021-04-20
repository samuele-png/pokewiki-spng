import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
export default function Pokedex() {
  const [searchText, set_searchText] = useState("");
  const [state, set_state] = useState({ data: [] });
  const search = async () => {
    

    const data = await fetch(
      /* base browser fetch  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/

      `https://pokeapi.co/api/v2/pokemon?limit=10000/`
    ).then((r) => r.json());

    set_state({ status: "done!", data: data.results }); // SEARCH COMES FROM API
    console.log("data here", state.data);
  };

  return (
    <div>
      <button onClick={search}>CLICK ME</button>
      {state.data && // the first time when the component renders, the API is not hit, but it tries to iterate to the state.data which will be undefined. We need to stop that iteration when undefined.
        state.data.map((pokemon) => (
          <PokemonCard name={pokemon.name} url={pokemon.url} />
        ))}
    </div>
  );
}
