import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Ad from "./Components/Advertisment/Ad";
import Main from "./Components/Main/Main";
import { useState } from "react";
import MovieCarousel from "./Components/MovieCarousel/MovieCarousel";
import ProtectedLayout from "./Components/ProtectedLayout/ProtectedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Ad />
        <Main />
        <h1 style={{ color: "yellow", marginLeft: "40px" }}>What to watch</h1>

        <MovieCarousel
          heading="Top Picks"
          api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        ></MovieCarousel>
        <MovieCarousel
          heading="Popular"
          api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        ></MovieCarousel>

        <Routes>
          <Route path="/" element={<ProtectedLayout />}>
            <Route
              path="/"
              element={
                <MovieCarousel
                  heading="From Your Watchlist"
                  api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
