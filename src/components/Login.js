import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import"../styles/Login.css"; // ← crea este archivo con los estilos que te pongo abajo

const Login = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Ingresa tu nombre de entrenador");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulamos un pequeño delay para que se vea el efecto de "conectando"
    setTimeout(() => {
      dispatch({
        type: "GET_USERNAME",
        payload: username.trim(),
      });

      setIsLoading(false);
      navigate("/pokedex", { replace: true }); // replace para no poder volver con back
    }, 1200);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="neon-title">Entrenador Pokemon</h1>
        <p className="subtitle">Conecta tu ID de entrenador</p>

        <form onSubmit={handleSubmit} className="futuristic-form">
          <div className="input-wrapper">
            <input
              type="text"
              className="neon-input"
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              disabled={isLoading}
            />
            <label className="floating-label">ID Entrenador</label>
          </div>

          {error && <p className="error-message neon-glow">{error}</p>}

          <button
            type="submit"
            className={`neon-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner">Conectando al Pokedexx...</span>
            ) : (
              "INICIAR CONEXIÓN"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;