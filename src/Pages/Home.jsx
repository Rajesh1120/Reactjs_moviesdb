import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ Allmovies, setAllMovies }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/popular?api_key=05c1b470c536823548e2161eb596b1ba",
        });

        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFunction();
  }, [setData]);

  return (
    <div className="home">
      <h1>Movies</h1>
      <div className="home-container">
        <ul>
          {Data.map((data) => (
            <div className="movie">
              <li key={data.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                  alt={data.original_name}
                />
                <div className="name">
                  <div className="movietitle">{data.title}</div>
                  <Link className="details" to={`movie/${data.id}`}>
                    Details
                  </Link>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
