import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import "../styles/Gender.css";

function Gender() {
  const { genderId } = useParams(); // Obtém o parâmetro genderId da URL
  const navigate = useNavigate(); // Use o hook useNavigate para navegação entre rotas

  // Dados fictícios da lista de álbuns do gênero
  const albuns = [
    {
      id: 1,
      name: "Madonna",
      description: "Confessions on a dance floor.",
    },
    {
      id: 2,
      name: "Metallica",
      description: "Death Magnetic.",
    },
    {
      id: 3,
      name: "Heilung",
      description: "Lifa.",
    },
  ];

  // Filtra os álbuns para exibir apenas os do gênero específico com base no genderId
  const filteredAlbuns = albuns.filter(
    (album) => album.id === parseInt(genderId, 10) // Converte o genderId para número
  );

  const handleBackToHome = () => {
    // Use navigate para voltar para a página inicial (URL '/')
    navigate("/");
  };

  return (
    <div className="gender-container">
      <h2>Álbuns do gênero escolhido {genderId}:</h2>
      <ul className="album-list">
        {filteredAlbuns.map((album) => (
          <li className="album-item" key={album.id}>
            <h3 className="album-name">{album.name}</h3>
            <p className="album-description">{album.description}</p>
            {/* Cria um link para o detalhe do álbum com base no ID */}
            <Link to={`/album/${album.id}`} className="gender-link">
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
      {/* Adicione um botão para voltar para a página inicial */}
      <button onClick={handleBackToHome} className="back-button">
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default Gender;
