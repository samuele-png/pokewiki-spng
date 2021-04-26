import { NavLink } from "react-router-dom"
export default function Nav() {
  return <div><NavLink to="/" className="text-link">Pokedex</NavLink>   -------------
  <NavLink to="/teambuilder" className="text-link">Team Builder</NavLink>
  
  </div>;
}
