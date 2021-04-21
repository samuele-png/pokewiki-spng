import { useParams } from "react-router-dom";
import { API } from "../Constants.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../components/Details.js";
export default function PokemonDetails() {
  //-------pokemon name (id) from url params -------
  const { id } = useParams();
  const singlePokemon = useParams();
  //--------------------- URL --------------------------
  const pokemonDetailsUrl = `${API}${singlePokemon.id}`;
  //--------------- pokemon details fetch --------------
  const [state, set_state] = useState([]);
  useEffect(() => {
    async function fetchDetails() {
      const res = await axios.get(`${pokemonDetailsUrl}`);
      set_state(res.data);
    }
    fetchDetails();
  }, [pokemonDetailsUrl]);
  
  const fetchedDetails = state

  console.log("these are the current details", fetchedDetails);

  return (
    <div>
      <Details details={fetchedDetails} />
    </div>
  );
}
