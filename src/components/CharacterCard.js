import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importa el CSS normal (sin desestructurar)
import "../App.css";  // ← o el nombre de tu archivo CSS principal

const CharacterCard = ({ characterUrl }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(characterUrl)
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando Pokémon:", err);
        setLoading(false);
      });
  }, [characterUrl]);

  if (loading) {
    return (
      <li className="cardokemon loading-card">
        <div className="loading">Cargando...</div>
      </li>
    );
  }

  if (!character) return null;

  const mainType = character.types?.[0]?.type?.name || "normal";

  return (
    <li className={`cardokemon ${mainType}col`}>
      <Link to={`/pokedex/${character.id}`} className="card-link">
        <div className="card-content">
          {/* Nombre con gradiente futurista */}
          <h3 className="pokemon-name">{character.name.toUpperCase()}</h3>

          {/* Imagen centrada con glow */}
          <div className="image-container">
            <img
              src={
                character.sprites?.other?.dream_world?.front_default ||
                character.sprites?.other?.official_artwork?.front_default ||
                character.sprites?.front_default
              }
              alt={character.name}
              className="imagen"
            />
          </div>

          {/* Stats con mejor formato */}
          <div className="stats-container">
            <p><span className="label">Tipo:</span> <span className="value">{mainType}</span></p>
            <p><span className="label">HP:</span> <span className="value">{character.stats?.[0]?.base_stat}</span></p>
            <p><span className="label">Ataque:</span> <span className="value">{character.stats?.[1]?.base_stat}</span></p>
            <p><span className="label">Defensa:</span> <span className="value">{character.stats?.[2]?.base_stat}</span></p>
            <p><span className="label">Ataque Esp.:</span> <span className="value">{character.stats?.[3]?.base_stat}</span></p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CharacterCard;