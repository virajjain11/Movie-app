import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movieName = "harry";
  const seriesName = "friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieName));
    dispatch(fetchAsyncSeries(seriesName));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  );
};

export default Home;
