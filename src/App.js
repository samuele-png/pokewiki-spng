import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Pokedex from "./pages/Pokedex.js";
import PokemonDetails from "./pages/PokemonDetails.js";
import PokemonCard from "./components/PokemonCard.js";
import Nav from "./components/Nav.js";
import { BASENAME } from "./Constants.js";
import { Fragment } from "react";
import GenSelector from "./components/GenSelector.js";
function App() {
  return (
    <div className="App">
      <Router basename={BASENAME}>
        <Fragment>
          <Nav />
          <GenSelector />
          
          <Switch>
            <Route exact path="/" component={Pokedex} />
            <Route exact path="/generation/:generation" component={Pokedex} />
            <Route path="/pokemon/:id" component={PokemonDetails} />{" "}
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
