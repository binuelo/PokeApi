import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Aps from "../App.css"
import fondo from "../assents/fondopok.png"
const CharacterInfo = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});//Para guardar l arespuesta 

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setCharacter(res.data));     
  }, [id]);
  return (

    <div className="infoimage">

      <div className="image1">
      <section className="image2">
        <img src={character.sprites?.other.dream_world.front_default} alt="" width={"300px"} height={"300px"}/>
        <h1>{character.name?.toUpperCase()}</h1>
      
      <section className="dataimage">

           <article className="dataimage1"> 
                <p> <b>Heigth: </b> {character.height}</p> 
            </article>
            <article className="dataimage2"> 
                <p> <b># {character.id}</b></p> 
            </article>
            <article className="dataimage3">
                <p> <b>weight: </b> {character.weight}</p>
            </article>
      </section>
      </section>
     </div>
     <div className="type">
<p> <b>Ability: </b> {character.abilities?.[0].ability.name}</p>
     <p><b>Type:</b> {character.types?.[0].type.name} </p>
     <p><b>HP:</b> {character.stats?.[0].base_stat}</p>
     <p><b>Attack:</b> {character.stats?.[1].base_stat}</p>
     <p><b>Defense:</b> {character.stats?.[2].base_stat}</p>
     <p><b>Special-attack:</b> {character.stats?.[3].base_stat}</p>
     <p> <b>Ability: </b> {character.abilities?.[0].ability.name}</p>
     <p><b>Type:</b> {character.types?.[0].type.name} </p>
     <p><b>HP:</b> {character.stats?.[0].base_stat}</p>
     <p><b>Attack:</b> {character.stats?.[1].base_stat}</p>


      </div>
      <div className="abilities">

      </div>
    </div>
  );
};

export default CharacterInfo;
