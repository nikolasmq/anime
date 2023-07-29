import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AnimeCard = ({ anime }) => {
  return (
    <div className="card">
      <img src={anime.images.jpg.image_url} className="card-img-top" alt={anime.title} />
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p>{anime.score}</p>
        {anime.score >0 && anime.score <= 4 ? (
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

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Realizar la petición GET a la API
    axios.get('https://api.jikan.moe/v4/anime?q=ALL&page=1&limit=10')
      .then(response => {
        setAnimeList(response.data.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleSearch = () => {
    // Realizar la petición GET a la API con el término de búsqueda
    axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&page=1&limit=10`)
      .then(response => {
        setAnimeList(response.data.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autopay: true,
    autoplaySpeed: 10,
  };

  return (
    <div>
      <input
        className='input-group mb-3'
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
      />
      <button onClick={handleSearch}>Buscar</button>

      <h1>Anime List</h1>
      <Slider {...settings}>
        {animeList.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </Slider>
    </div>
  );
};

export default AnimeList;
