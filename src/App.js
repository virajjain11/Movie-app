import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navigate,
} from "react-router-dom";
import Home from "../src/components/Home/Home";
import MovieDeatails from "../src/components/MovieDetails/MovieDetails";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbId" element={<MovieDeatails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
