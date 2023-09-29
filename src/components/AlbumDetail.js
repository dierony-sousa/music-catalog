import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import "../styles/AlbumDetail.css";

function AlbumDetail() {
  const { albumId } = useParams(); // Obtém o parâmetro albumId da URL
  const navigate = useNavigate(); // Use o hook useNavigate para navegação entre rotas

  const album = {
    id: albumId,
    name: "Álbum " + albumId,
    description: "Descrição do Álbum " + albumId + "."
  };

  const handleBack = () => {
    // Use navigate para voltar para a página do Gênero com o ID correto
    navigate(`/gender/${album.id}`);
  };

  return (
    <div className="album-detail-container">
      <h2 className="album-name">{album.name}</h2>
      <p className="album-description">{album.description}</p>
      {/* Adicione o ID do álbum à rota de volta para o gênero */}
      <button onClick={handleBack} className="back-button">
        Voltar para a lista de gêneros
      </button>
    </div>
  );
}

export default AlbumDetail;
