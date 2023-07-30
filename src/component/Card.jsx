import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
      <div className="container-fluid">
          <div className="row col-12 p-1">
              <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-center">
                      <h3 id="title">{anime.title}</h3>
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-center">
                      <img src={anime.images.jpg.image_url} className="card-img-top img-fluid" alt={anime.title} />
                  </div>
                  <div className="card-footer">
                      <h5 className="episodes">Episodios: {anime.episodes}</h5>
                      {anime.score > 0 && anime.score <= 4 ? (
                          <h4 className="score">Score: {anime.score} <br /> No te recomiendo ver esto.</h4>
                      ) : anime.score > 4 && anime.score <= 7 ? (
                          <h4 className="score">Score: {anime.score} <br /> Puedes divertirte.</h4>
                      ) : anime.score > 7 ? (
                          <h4 className="score">Score: {anime.score} <br /> Sabes, es uno de los mejores.</h4>
                      ) : (
                          <h4 className="score">Score: Sin información</h4>
                      )}
                      <a href={anime.url} target='_blank' className="btn btn-primary d-flex align-items-center justify-content-center">Ver más</a>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default AnimeCard;
