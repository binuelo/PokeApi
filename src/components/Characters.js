import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [types, setTypes] = useState([]);
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=16")
      .then((res) => setCharacters(res.data.results));
    
    axios  //para mandar datos del select
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  
  }, []);

  const submit = (e) => {
    //para evitar que se recarge de nuev la pagina
    e.preventDefault();
      //link para ingresar 
    navigate(`/characters/${characterName}`);
  };

  const handletype = (e) => {
    // e.target.value es para acceder a lo que selecciona el usuario
    axios.get(e.target.value)
    .then((res) => setCharacters(res.data.pokemon));//cambiamos results x pokemon ya que la direccion donde queremos acceder es diferente
 // nueva direccion => res.data.pokemon.pokemon.url
 //=> direccion anterior  res.data.results.url 
  };

  return (
    <div>
      <h1>Characters</h1>
      <p className="welcome-message">Welcome {userName}</p>
      <div className="select">
        <select onChange={handletype} > {/*Listado de opciones*/}
          {types.map((type) => (
            <option key={type.url} value={type.url}>
              {type.name}
              {console.log(type.url)}
            </option>
          ))}
        </select>
      </div>

      <form className="input-container" onSubmit={submit}>
        <label htmlFor="character-name">Busca por nombre</label>
        <input
          type="text"
          id="character-name"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <button>Buscar</button>
      </form>
     <ul className="poke-list">
        {characters.map((character) => (
          <CharacterCard
            // en la pokedex, la condición es diferente
            //          si character.url  accede ? de lo contrario
            characterUrl={character.url ? character.url : character.pokemon.url}
           //Charracter cuando se trae al inicio : Character cuando se selecciona el Select
            key={character.url ? character.url : character.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Characters;