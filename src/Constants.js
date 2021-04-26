const API = 'https://pokeapi.co/api/v2/pokemon/';
const MAX_POKEMONS_GEN = [0, 151, 251, 386, 493, 649, 721, 809, 898, 1118];
const MAX_POKEMONS_GEN_I = 151;
const MAX_POKEMONS_GEN_II = 251;
const MAX_POKEMONS_GEN_III = 386;
const MAX_POKEMONS_GEN_IV = 493;
const MAX_POKEMONS_GEN_V = 649;
const MAX_POKEMONS_GEN_VI = 721;
const MAX_POKEMONS_GEN_VII = 809;
const MAX_POKEMONS_GEN_VIII = 898;
const MAX_POKEMONS_EXTRA = 1118;
const MAX_POKEMONS = MAX_POKEMONS_EXTRA;
const BASENAME = '';

const CAPITALIZE = function jsUcfirst(string) 
{
  if (string != undefined)
    return string.charAt(0).toUpperCase() + string.slice(1);
    else return ""
}
export  {
  CAPITALIZE,
  BASENAME,
  API,
  MAX_POKEMONS,
  MAX_POKEMONS_GEN,
  MAX_POKEMONS_GEN_I,
  MAX_POKEMONS_GEN_II,
  MAX_POKEMONS_GEN_III,
  MAX_POKEMONS_GEN_IV,
  MAX_POKEMONS_GEN_V,
  MAX_POKEMONS_GEN_VI,
  MAX_POKEMONS_GEN_VII,
  MAX_POKEMONS_GEN_VIII,
  MAX_POKEMONS_EXTRA  
};