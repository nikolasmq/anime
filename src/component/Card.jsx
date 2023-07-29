import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{anime.title}</h3>
      </div>
      <div className="card-body">
        <img src={anime.images.jpg.image_url} className="card-img-top img-fluid" alt={anime.title} />
      </div>
      <div className="card-footer">
        <p>{anime.score}</p>
        {anime.score > 0 && anime.score <= 4 ? (
          <span className="score">Score: {anime.score} - No recomendado</span>
        ) : anime.score > 4 && anime.score <= 7 ? (
          <span className="score">Score: {anime.score} - Bueno</span>
        ) : anime.score > 7 ? (
          <span className="score">Score: {anime.score} - Recomendado</span>
        ) : (
          <span className="score">Score: N/A</span>
        )}
        <a href={anime.url} className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default AnimeCard;
