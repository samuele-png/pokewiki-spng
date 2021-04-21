import { useState, useEffect } from "react";
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

return(
      <div>
        <Link to={`/pokemon/${props.name}`}>{props.name} {props.url}</Link>
        
      </div>
);
  }
  