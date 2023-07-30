import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AnimeCard from './Card';

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
    axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&page=1`)
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
    autoplay: true,
    autoplaySpeed: 3000, // Velocidad de la rotación automática en milisegundos
    responsive: [
      {
        breakpoint: 1200, // Puedes ajustar los breakpoints según tus necesidades
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      <div id='main'>
      <h1 className='d-flex align-items-center justify-content-center' id='main-title'>listados de anime</h1>
        <div className="d-flex p-5">
        <input
          className="form-control me-2" 
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
        />
        <button className="btn btn-outline-success" onClick={handleSearch}>Buscar</button>
      </div>
      
        <Slider {...settings}>
          {animeList.map(anime => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AnimeList;
