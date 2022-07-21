import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/serverApi";
import { ApiKey } from "../../api/Apikey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieName) => {
    const res = await Api.get(`?apikey=${ApiKey}&s=${movieName}&type=movie`);
    return res.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (seriesName) => {
    const res = await Api.get(`?apikey=${ApiKey}&s=${seriesName}&type=series`);
    return res.data;
  }
);

export const fetchAsyncMoviesOrSeries = createAsyncThunk(
  "movies/fetchAsyncMoviesOrSeries",
  async (id) => {
    const res = await Api.get(`?apikey=${ApiKey}&i=${id}&plot=full`);
    return res.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    series: {},
    seriesOrMovies: {},
  },
  reducers: {
    removeMoviesOrShow: (state) => {
      state.seriesOrMovies = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending brooo!!");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("hogyaa bhai, now whaat!!");
      console.log(payload);
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected bro!!, kal aana, mast nahake ajaa");
    },
    [fetchAsyncSeries.rejected]: () => {
      console.log("series rejected bro!!, kal aana, mast nahake ajaa");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("hogyaa bhai, now whaat!!");
      return { ...state, series: payload };
    },
    [fetchAsyncMoviesOrSeries.fulfilled]: (state, { payload }) => {
      return { ...state, seriesOrMovies: payload };
    },
  },
});

export const { removeMoviesOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getAllSeriesOrMovies = (state) => state.movies.seriesOrMovies;

export default movieSlice.reducer;
