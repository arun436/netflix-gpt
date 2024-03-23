import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-40 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />

        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
      {/* Movie List - Popular
           Movies Cards - n
    Movies List - Trending
    Movies List - Now Playing
    Movies List - Horror */}
    </div>
  );
};

export default SecondaryContainer;
