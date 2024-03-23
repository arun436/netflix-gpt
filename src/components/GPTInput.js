import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";
const GPTInput = () => {
  const language = useSelector((store) => store?.config?.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGPTSearchClick = async () => {
    // Make an API CALL to GPT API and get movie results.
    const gptQuery =
      "Act as a Movie recommendation System and suggest some movies for the query. " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Interstellar, Sholay, Don, RRR, Golmaal";
    // try {
    //   const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: gptQuery }],
    //     model: "gpt-3.5-turbo",
    //   });
    //   console.log(gptResults.choices);
    // } catch (error) {
    //   console.log(error.message);
    const movies = ["Interstellar", "Sholay", "RRR", "3 idiots", "Vikram"];

    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movieNames: movies, movieResults: tmdbResults })
    );
  };

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();

      return json.results;
    } catch (error) {
      return error.message;
    }
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[language]?.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          type="submit"
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 hover:opacity-90"
          onClick={handleGPTSearchClick}
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTInput;
