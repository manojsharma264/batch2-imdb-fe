import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Ad from "./Components/Advertisment/Ad";
import Main from "./Components/Main/Main";
import { useState } from "react";
import MovieCarousel from "./Components/MovieCarousel/MovieCarousel";

function App() {
  return (
    <>
      <Header />
      <Ad />
      <Main />
      <h1 style={{ color: "yellow", marginLeft: "40px" }}>What to watch</h1>

      <MovieCarousel heading="Top Picks" api=""></MovieCarousel>
    </>
  );
}

export default App;
