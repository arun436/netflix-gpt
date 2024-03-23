import { BG_URL } from "../utils/constants";
import GPTInput from "./GPTInput";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearchComponent = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="bg" />
      </div>
      <div className="">
        <GPTInput />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearchComponent;
