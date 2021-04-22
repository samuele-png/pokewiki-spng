import PropTypes from "prop-types";
import React from "react";
import '../App.css'

export default function Details(props) {
  const data = props.details;

  const name = data.name;
  const types = data.types && data.types.map((e) => e.type.name);
  const abilities = data.abilities && data.abilities.map((e) => e.ability.name);
  const height = data.height;
  const weight = data.weight;
  const id = data.id;
  const moves = data.moves && data.moves.map((e) => e.move.name);
  const sprite = data.sprites && data.sprites.front_default;
  const artwork =
    data.sprites && data.sprites.other["official-artwork"].front_default;

  return (
    <div class="details"> 
      <img src={artwork} />
      <p>Name: {name}</p>
      <p>Type: {types}</p>
      <p>Abilities: {abilities}</p>
      <p> Height: {height}</p>
      <p> Weight: {weight}</p>
      <p> Moves: {moves}</p>
    </div>
  );
}
