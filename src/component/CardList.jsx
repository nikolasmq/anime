import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AnimeCard from './Card';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autopay: true,
    autoplaySpeed: 10,
  };

function Cardlist(animeList) {

    console.log(animeList);
    
    return (
        <div>
            <Slider {...settings}>
                {animeList.map(anime => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </Slider>
        </div>
    )
}

export default Cardlist;