const AnimeCard = ({ anime }) => {
    return (
        <div className="row">
            <div className="card">
                <div className="card-header">
                    <img src={anime.images.jpg.image_url} className="card-image-container" alt={anime.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{anime.title}</h5>
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
                <div className="card-footer">
                    <small className="text-muted">Episodios: {anime.episodes}</small>
                </div>
            </div>
        </div>
    );
};

    export default AnimeCard;