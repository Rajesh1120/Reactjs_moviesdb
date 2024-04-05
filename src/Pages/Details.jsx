import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Details = ({ AllMovies }) => {
  const [Allmovies, setAllMovies] = useState([]);
  const { id } = useParams();
  const [onemovie, setOneMovie] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/popular?api_key=05c1b470c536823548e2161eb596b1ba",
        });
        
        setAllMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFunction();
  }, [setAllMovies]);

  function movies(id) {
    const unqmovie = Allmovies.filter(
      (movie) => parseInt(movie.id, 10) === parseInt(id.id, 10)
    );
    setOneMovie(...unqmovie);

    setClicked(true);
  }

  return (
    <div className="alldetails">
      {clicked ? (
        <div className="singlemovie">
          <img
            src={`https://image.tmdb.org/t/p/w500${onemovie["backdrop_path"]}`}
            alt={onemovie[id]}
          />
          <div className="name">
            <div id="moviecontainers">
              <div className="titlemove">
                <h1>{onemovie["title"]}</h1>
                <p>Description: {onemovie["overview"]}</p>
              </div>
              <div className="releasedate">
                <p>Release Date: {onemovie["release_date"]}</p>
              </div>
              <div className="close-btn">
                <Link className="details" to="..">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="open">
            <button id="openit" onClick={() => movies({ id })}> Open it</button>
        </div>
        
      )}
    </div>
  );
};

export default Details;
