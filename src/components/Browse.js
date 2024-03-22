import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearchComponent from "./GPTSearchComponent";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGPTSearchView = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <div>
      <Header />
      {showGPTSearchView ? (
        <GPTSearchComponent />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
      Main Container 
        - video background 
        - Video Title 
      Secondary Container
        - Movie Lists = n
          - cards = n */}
    </div>
  );
};

export default Browse;
