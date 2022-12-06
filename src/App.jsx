import { useState } from "react";

import "./App.css";

import pokemon from "../src/assets/pokemonArray.json";

function App() {
  const [poke, setPoke] = useState("");
  const [pokeImgSrc, setPokeImgSrc] = useState("");
  const [pokeImg, setPokeImg] = useState(false);
  const [error, setError] = useState(false);

  const pokemonArray = pokemon.map((pokemon) => {
    return pokemon.toLowerCase();
  });

  const checkPoke = () => {
    if (pokemonArray.includes(poke.trim().toLowerCase())) {
      setError(false);
      setPokeImgSrc(
        `https://img.pokemondb.net/artwork/vector/${poke
          .trim()
          .toLowerCase()}.png`
      );
      setPoke("");
      setPokeImg(true);
    } else {
      setPokeImg(false);
      setPokeImgSrc("");
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPoke();
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="header">PokéSearch</h1>
          {error ? (
            <h2 className="text-danger">
              Please enter a Pokémon with the correct format (e.g
              "Landorus-Therian, Shaymin-Sky, Arceus-Dark")
            </h2>
          ) : (
            ""
          )}
          {pokeImg ? <img src={pokeImgSrc} alt="Pokémon" /> : ""}
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="Pokémon" className="label">
              Search for Pokémon!
            </label>
            <input
              type="text"
              name="Pokémon"
              id="Pokémon"
              value={poke}
              onChange={(e) => setPoke(e.target.value)}
              className="search-bar"
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
