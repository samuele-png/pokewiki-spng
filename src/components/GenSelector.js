import React from "react";
import { Link } from "react-router-dom";

const GenSelector = ({ currentGeneration }) => {
  //id is based on route, based on pokemon gen
  const isActive = (id) => (currentGeneration === id && "is-active") || "";

  
 
  return (
    <div className="tabs">
      <ul>
        <li className={isActive("all")}>
          <Link to={"/generation/all"} >All</Link>
        </li>
        <li className={isActive("1")}>
          <Link to={"/generation/1"}>First generation</Link>
        </li>
        <li className={isActive("2")}>
          <Link to={"/generation/2"}>Second geneneration</Link>
        </li>
        <li className={isActive("3")}>
          <Link to={"/generation/3"}>Third generation</Link>
        </li>
        <li className={isActive("4")}>
          <Link to={"/generation/4"}>Fourth generation</Link>
        </li>
        <li className={isActive("5")}>
          <Link to={"/generation/5"}>Fifth generation</Link>
        </li>
        <li className={isActive("6")}>
          <Link to={"/generation/6"}>Sixth generation</Link>
        </li>
        <li className={isActive("7")}>
          <Link to={"/generation/7"}>Seventh generation</Link>
        </li>
        <li className={isActive("8")}>
          <Link to={"/generation/8"}>Eighth generation</Link>
        </li>
      </ul>
    </div>
  );
};

export default GenSelector;
