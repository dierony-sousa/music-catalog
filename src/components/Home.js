import React from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import "../styles/Home.css"; // Importa o estilo CSS para este componente

function Home() {
  // Dados fictícios do catálogo de músicas
  const genres = [
    {
      id: 1,
      name: "Pop",
      description: "Pop - Uma batida contagiante para alegrar seu dia!",
    },
    {
      id: 2,
      name: "Rock",
      description: "Rock - A energia crua e atitude em forma de música.",
    },
    {
      id: 3,
      name: "Folk",
      description: "Folk - Canções que contam histórias, como um abraço musical.",
    },
  ];

  return (
    <div>
      <h2>Escolha um gênero musical:</h2>
      <ul className="gender-list">
        {genres.map((gender) => (
          <li className="gender-item" key={gender.id}>
            <h3 className="gender-name">{gender.name}</h3>
            <p className="gender-description">{gender.description}</p>
            <Link to={`/gender/${gender.id}`} className="gender-link">
              Ver álbuns
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
