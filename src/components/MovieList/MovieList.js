import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";
import { settings } from "./settings";
import Slider from "react-slick";

const MovieList = () => {
  const movieList = useSelector(getAllMovies);
  const seriesList = useSelector(getAllSeries);

  let renderMovies = "";
  renderMovies =
    movieList.Response === "True" ? (
      movieList.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-eror">
        <h2>Movie not found</h2>
        <p>(create movie not found page)</p>
        {/* <h3>{movieList.Error}</h3> */}
      </div>
    );

  let renderSeries = "";
  renderSeries =
    seriesList.Response === "True" ? (
      seriesList.Search.map((series, index) => (
        <MovieCard key={index} data={series} />
      ))
    ) : (
      <div className="movie-eror">
        <h3>{seriesList.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="series-list">
        <h2>Series</h2>
        <div>
          <Slider {...settings}>{renderSeries}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
