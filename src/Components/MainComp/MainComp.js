import React from "react";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import Main from "../Main/Main";
import FallbackComp from "../FallbackComp";
import { Suspense } from "react";
const Explore = React.lazy(() => import("../Explore/Explore"));
export default function MainComp() {
  return (
    <div>
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
      <Suspense fallback={<FallbackComp />}>
        <Explore />
      </Suspense>
    </div>
  );
}
