import React from "react";
import "../App.css";
import { CAPITALIZE } from "../Constants.js";
import PropTypes from "prop-types";
export default function Details(props) {
  const data = props.details;
  //------------data parsing -----------
  const name = CAPITALIZE(data.name);
  const types = data.types && data.types.map((e) => e.type.name);
  const abilities =
    data.abilities &&
    data.abilities.map((e) => <p>{CAPITALIZE(e.ability.name)}</p>);
  const height = data.height;
  const weight = data.weight;
  const id = data.id;
  const moves =
    data.moves && data.moves.map((e) => <p>{CAPITALIZE(e.move.name)}</p>);
  const sliceMoves = moves && moves.slice(0, 10);

  const spriteFront = data.sprites && data.sprites.front_default;
  const spriteBack = data.sprites && data.sprites.back_default;
  const spriteFrontShiny = data.sprites && data.sprites.front_shiny;
  const spriteBackShiny = data.sprites && data.sprites.back_shiny;
  const artwork =
    data.sprites && data.sprites.other["official-artwork"].front_default;

  console.log(name, types, abilities, height, weight, id, moves);

  //--------- background selector -----------
  const selectColor = (name) => {
    switch (name) {
      case "normal":
        return "#A8A77A";
      case "fire":
        return "#ee8130";
      case "water":
        return "#6390f0";
      case "electric":
        return "#f7d02c";
      case "grass":
        return "#7ac74c";
      case "ice":
        return "#96d9d6";
      case "fighting":
        return "#c22e28";
      case "poison":
        return "#a33ea1";
      case "ground":
        return "#e2bf65";
      case "flying":
        return "#a98ff3";
      case "psychic":
        return "#f95587";
      case "bug":
        return "#a6b91a";
      case "rock":
        return "#b6a136";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6f35fc";
      case "dark":
        return "#705746";
      case "steel":
        return "#b7b7ce";
      case "fairy":
        return "#d685ad";
      default:
        return undefined;
    }
  };

  return (
    <div className="detailsDiv">
      <p className="number"> Pokedex number: {id}</p>
      <img src={artwork} alt={(name, "artwork")} className="artwork" />
      <p className="name"> Name: {name}</p>
      Type:{" "}
      <p
        style={{ backgroundColor: selectColor(types && types[0]) }}
        className="types"
      >
        {CAPITALIZE(types && types[0])}
      </p>{" "}
      <p
        style={{ backgroundColor: selectColor(types && types[1]) }}
        className="types"
      >
        {" "}
        {CAPITALIZE(types && types[1])}
      </p>{" "}
      <br />
      <br />
      <p className="abilities" key={abilities}>Abilities: {abilities}</p>
      <p className="height"> Height: {height}</p>
      <p className="weight"> Weight: {weight}</p>
      <h1>Moves: </h1>
      <p className="moves" key={moves}>
        {sliceMoves && sliceMoves}{" "}
      </p>
      <img
        src={spriteBack}
        alt={(name, "Sprite back")}
        className="spriteBack"
      />
      <img
        src={spriteFront}
        alt={(name, "Sprite front")}
        className="spriteFront"
      />{" "}
      <img
        src={spriteBackShiny}
        alt={(name, "Sprite back shiny")}
        className="spriteBackShiny"
      />
      <img
        src={spriteFrontShiny}
        alt={(name, "Sprite front shiny")}
        className="spriteFrontShiny"
      />{" "}
    </div>
  );
}
