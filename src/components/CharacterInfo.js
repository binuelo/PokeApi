import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aps from "../App.css"

const CharacterInfo = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});//Para guardar l arespuesta 

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setCharacter(res.data));     
  }, [id]);

  return (

    <div className={`${Aps.col} ${character.types?.[0].type.name}`}>
      <h1>{character.name?.toUpperCase()}</h1>
      <img src={character.sprites?.other.dream_world.front_default} alt="" width={"150px"} height={"150px"}/>
     <p> <b>Ability: </b> {character.abilities?.[0].ability.name}</p>
     <p><b>Type:</b> {character.types?.[0].type.name} </p>
     <p><b>HP:</b> {character.stats?.[0].base_stat}</p>
     <p><b>Attack:</b> {character.stats?.[1].base_stat}</p>
     <p><b>Defense:</b> {character.stats?.[2].base_stat}</p>
     <p><b>Special-attack:</b> {character.stats?.[3].base_stat}</p>
     
     {console.log(character.moves?.[0].move.name)}
     
    </div>
  );
};

export default CharacterInfo;
