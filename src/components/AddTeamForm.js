import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTeams } from "../store/teams/actions";
import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

import { API, MAX_POKEMONS_GEN_IV, CAPITALIZE } from "../Constants.js";
export default function AddTeamForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pokemon, setPokemon] = useState("");

  //----------- fetching ---------------

  const urlAPI = `${API}?limit=${MAX_POKEMONS_GEN_IV}&offset=0`;

  const [state, set_state] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const res = await axios.get(`${urlAPI}`);
      set_state(res.data);
    }
    fetchList();
  }, [urlAPI]);
  const fetchedData = state.results;
  //------- setting options ----------
  const options =
    fetchedData &&
    fetchedData.map(function (row) {
      // this function defines the "mapping behaviour". name and title
      // data from each "row" from your columns array is mapped to a
      // corresponding item in the new "options" array

      return { value: row.name, label: row.name };
    });

  //----------- dispatch & form reset after dispatch-------------
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

  const handleChangePokemon = (e) => setPokemon(e.map((e) => [e.value]));

  return (
    <div>
      <form onSubmit={submit }>
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

        <p>
          <label htmlFor="pokemon-select">Choose a pokemon:</label>

          <Select
            isMulti={true}
            options={options}
            value={options && options.value}
            onChange={handleChangePokemon}
          />
        </p>

        <p>
          <button type="submit">Add this team!</button>
        </p>
      </form>
    </div>
  );
}
