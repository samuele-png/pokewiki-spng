import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom"; //URl params hook
import axios from "axios";
import { CAPITALIZE } from "../Constants.js";

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
    <div className="cardBox">
      <Link to={`/pokemon/${props.name}`} className='text-link'>
        {id} {CAPITALIZE(props.name)} <img src={sprite} alt= {props.name, "Sprite Front"}/>
      </Link>
    </div>
  );
}
