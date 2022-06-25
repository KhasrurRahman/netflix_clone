import React from "react";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import App from "./App";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import Row from "./components/row/Row";
import RowSkeleton from "./components/skeleton/RowSkeleton";
import requests from "./fatchData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMANTARIES" fetchUrl={requests.fetchDocumantaries} />
    </SkeletonTheme>
  </React.StrictMode>
);
