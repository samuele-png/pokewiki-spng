import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard.js";
import GenSelector from "../components/GenSelector.js";
import { useParams } from "react-router-dom"; //URl params hook
import axios from "axios";
import {
  API,
  MAX_POKEMONS,
  MAX_POKEMONS_GEN_I,
  MAX_POKEMONS_GEN_II,
  MAX_POKEMONS_GEN_III,
  MAX_POKEMONS_GEN_IV,
  MAX_POKEMONS_GEN_V,
  MAX_POKEMONS_GEN_VI,
  MAX_POKEMONS_GEN_VII,
  MAX_POKEMONS_GEN_VIII,
} from "../Constants.js";

export default function Pokedex() {

  //--------- PROPS FROM URL ------------------

  const { id } = useParams();
  const currentGen = useParams();
  const validGeneration = currentGen.generation;

  // ------------- GENERATION SELECTOR --------------
  // https://pokeapi.co/docs/v2 pokeAPI docs

  const getLimitsFromGen = (generation) => {
    let limit;
    let offset;
    switch (generation) {
      case "all":
        limit = MAX_POKEMONS;
        offset = 0;
        break;
      case "1":
        limit = MAX_POKEMONS_GEN_I;
        offset = 0;
        break;
      case "2":
        limit = MAX_POKEMONS_GEN_II - MAX_POKEMONS_GEN_I;
        offset = MAX_POKEMONS_GEN_I;
        break;
      case "3":
        limit = MAX_POKEMONS_GEN_III - MAX_POKEMONS_GEN_II;
        offset = MAX_POKEMONS_GEN_II;
        break;
      case "4":
        limit = MAX_POKEMONS_GEN_IV - MAX_POKEMONS_GEN_III;
        offset = MAX_POKEMONS_GEN_III;
        break;
      case "5":
        limit = MAX_POKEMONS_GEN_V - MAX_POKEMONS_GEN_IV;
        offset = MAX_POKEMONS_GEN_IV;
        break;
      case "6":
        limit = MAX_POKEMONS_GEN_VI - MAX_POKEMONS_GEN_V;
        offset = MAX_POKEMONS_GEN_V;
        break;
      case "7":
        limit = MAX_POKEMONS_GEN_VII - MAX_POKEMONS_GEN_VI;
        offset = MAX_POKEMONS_GEN_VI;
        break;
      case "8":
        limit = MAX_POKEMONS_GEN_VIII - MAX_POKEMONS_GEN_VII;
        offset = MAX_POKEMONS_GEN_VII;
        break;

      default:
        limit = MAX_POKEMONS;
        offset = 0;
        break;
    }
    return [limit, offset];
  };

  //----------------------- API URL GENERATION-----------------------

  const genUrl = () => {
    const [limit, offset] = getLimitsFromGen(validGeneration);
    return `${API}?limit=${limit}&offset=${offset}`;
  };

  const myUrl = genUrl();

  //--------------- FETCHING -----------------

  const [state, set_state] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const res = await axios.get(`${genUrl()}`);
      set_state(res.data);
    }
    fetchList();
  }, [genUrl()]);
  const fetchedData = state.results;

  return (
    <div>
      {fetchedData &&
        fetchedData.map((state) => (
          <PokemonCard key={state.name} name={state.name} url={state.url} />
        ))}
    </div>
  );

  // state && state.map((state)=>console.log("this is the final result", state))}
}
