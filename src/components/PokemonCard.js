import { useState, useEffect } from "react";
import '../App.css'
import GenSelector from "../components/GenSelector.js";
import { useParams, Link } from "react-router-dom"; //URl params hook
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

export default function PokemonCard(props) {

//---------- SPRITE FETCH ------------
  const spriteUrl = props.url;
  const [state, set_state] = useState([]);
  useEffect(() => {
    async function fetchSprite() {
      const res = await axios.get(`${spriteUrl}`);
      set_state(res.data);
    }
    fetchSprite();
  }, [spriteUrl]);

  const fetchedData = state;

  const id = fetchedData.id;
  const sprite = fetchedData.sprites && fetchedData.sprites.front_default;

  return (
    <div class="cardBox">
      <Link to={`/pokemon/${props.name}`}>
        {props.name}  <img src={sprite} /> {id}
      </Link>
    </div>
  );
}
