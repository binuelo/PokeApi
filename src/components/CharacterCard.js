import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aps from "../App.css"

const CharacterCard = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, [characterUrl]);

  return (
  
    <li className="col" >   {/*Informacion del Personaje */}
     <div className={`${Aps.col} ${character.types?.[0].type.name}`}>
        <Link to={`/characters/${character.id}`} className="character-card"> {/*hacedemos a la lista para Mostrar lista de Pokemones*/}
          <h3>{character.name}</h3>
          <img src={character.sprites?.other.dream_world.front_default} height={"80px"} width={"80px"} className="imagen"/>
        </Link>
      </div>
      <div  className={`${Aps.col} ${character.types?.[0].type.name}`}>
            <p><b>Type:</b> {character.types?.[0].type.name} </p>
            <p><b>HP:</b> {character.stats?.[0].base_stat}</p>
            <p><b>Attack:</b> {character.stats?.[1].base_stat}</p>
            <p><b>Defense:</b> {character.stats?.[2].base_stat}</p>
            <p><b>Special-attack:</b> {character.stats?.[3].base_stat}</p>
      </div>   
    </li>
  );
};

export default CharacterCard;