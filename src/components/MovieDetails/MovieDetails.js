import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMoviesOrSeries,
  getAllSeriesOrMovies,
  removeMoviesOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrSeries(imdbId));

    return () => {
      dispatch(removeMoviesOrShow());
    };
  }, [dispatch, imdbId]);
  const data = useSelector(getAllSeriesOrMovies);
  console.log(data);
  return (
    <div className="movie-section">
      {data.Title ? (
        <div className="left-section">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>IMDB Rating: {data.imdbRating}</span>
            <span>IMDB Votes: {data.imdbVotes}</span>
            <span>Runtime: {data.Runtime}</span>
            <span>Year: {data.Year}</span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
      ) : (
        "...Loading"
      )}
      <div className="right-section">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetails;
