import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Pokedex from "./pages/Pokedex.js";
import PokemonDetails from "./pages/PokemonDetails.js";
import Nav from "./components/Nav.js";
import { BASENAME } from "./Constants.js";
import { Fragment } from "react";
import GenSelector from "./components/GenSelector.js";
import "./App.css";
import TeamBuilder from "./pages/TeamBuilder";
function App() {
  return (
    <div className="App">
      <Router basename={BASENAME}>
        {" "}
        <h1 className="nav">
          <Nav />
        </h1>
        <div className="home">
          <Fragment>
            <GenSelector />
            <Switch>
              <Route exact path="https://samuele-png.github.io/pokewiki-spng/" component={Pokedex} />
              <Route exact path="/generation/:generation" component={Pokedex} />
              <Route path="/pokemon/:id" component={PokemonDetails} />
              <Route path="/teambuilder" component={TeamBuilder} />
              ,\
            </Switch>
          </Fragment>
        </div>
      </Router>
    </div>
  );
}

export default App;
