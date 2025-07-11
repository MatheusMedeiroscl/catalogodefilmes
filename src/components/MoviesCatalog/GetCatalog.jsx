import { useEffect, useState } from "react";
import '../MoviesCatalog/GetCatalog.css'

function GetCatalog(){
    const apiKey = "c21be08f3bddddb8f6dace551f71004b";
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const getMovies = async () =>{
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`);

                if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
                };

                const data = await response.json();
                setMovies(data.results);

                }catch(error){
                    console.error("Erro ao buscar os filmes:", error);
                };
        };
        getMovies()
});

  
  return (
    <div className="catalog">
      {movies.length > 0 ? (
        movies.map((movie) => (

            <div className="movieCard" key={movie.id} onClick={checkDetails}>
                <section className="areaForPoster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />                
                </section>
                
                <section className="areaForDetails">
                    <h2 className="title">{movie.title}</h2>
                    <p className="releaseData">{movie.release_date}</p>
                    <p className="overview">{movie.overview}</p>
                </section>
            </div>
        ))
      ) : (
        <p>Carregando filmes...</p>
      )}
    </div>
  );
}

export default GetCatalog;