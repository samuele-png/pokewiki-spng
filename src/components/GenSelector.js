import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const GenSelector = ({ currentGeneration }) => {
  //id is based on route, based on pokemon gen
  const isActive = (id) => (currentGeneration === id && "is-active") || "";
  return (
    <div className="tabs">
      <ul>
        <li className={isActive("1")}>
          <Link to={"/generation/1"} className="text-link">
            First generation
          </Link>
        </li>
        <li className={isActive("2")}>
          <Link to={"/generation/2"} className="text-link">
            Second geneneration
          </Link>
        </li>
        <li className={isActive("3")}>
          <Link to={"/generation/3"} className="text-link">
            Third generation
          </Link>
        </li>
        <li className={isActive("4")}>
          <Link to={"/generation/4"} className="text-link">
            Fourth generation
          </Link>
        </li>
        <li className={isActive("5")}>
          <Link to={"/generation/5"} className="text-link">
            Fifth generation
          </Link>
        </li>
        <li className={isActive("6")}>
          <Link to={"/generation/6"} className="text-link">
            Sixth generation
          </Link>
        </li>
        <li className={isActive("7")}>
          <Link to={"/generation/7"} className="text-link">
            Seventh generation
          </Link>
        </li>
        <li className={isActive("8")}>
          <Link to={"/generation/8"} className="text-link">
            Eighth generation
          </Link>
        </li>
        <li className={isActive("extra")}>
          <Link to={"/generation/extra"} className="text-link">
            Extra forms
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GenSelector;
