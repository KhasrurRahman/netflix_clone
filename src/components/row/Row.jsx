import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./row.css";
import RowSkeleton from "../skeleton/RowSkeleton";
import axios from "../../axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fatchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false)
    };
    fatchData();
  }, [fetchUrl]);

  const imgPath = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <h2 className="posterTitle">{title}</h2>
      <div className="postDetails">
        {loading  && <RowSkeleton counter={20}/>}
        {movies.map((movie, index) => (
          <img src={`${imgPath}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} key={index} className={`posterImg ${isLargeRow && "largePoster"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
