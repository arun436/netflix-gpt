import { BG_URL } from "../utils/constants";
import GPTInput from "./GPTInput";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearchComponent = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="bg" />
      </div>
      <GPTInput />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearchComponent;
