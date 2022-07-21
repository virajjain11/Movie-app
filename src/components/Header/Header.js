import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import user from "../../images/user-img.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term !== "") {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncSeries(term));
      setTerm("");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"> Movie App</div>
      </Link>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="search any movie or shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit"> search</button>
        </form>
      </div>
      <div className="user-img">
        <img src={user} alt="user-photo" />
      </div>
    </div>
  );
};

export default Header;
