import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../../fatchData";
import "./banner.css";

const Banner = () => {
  const [movie, settMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fatchData = async () => {
      const request = await axios.get(requests.fetchTopRated);
      settMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      setLoading(false)
    };
    fatchData();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original/";
  function truncate(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  return (
    <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url("${base_url}${movie?.backdrop_path}")` }} >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
      

      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>

      <h1 className="banner_desc">{truncate( movie?.overview ? movie?.overview : " ",150)}</h1>
      </div>

      <div className="banner_bottom"></div>
    </header>
  );
};

export default Banner;
