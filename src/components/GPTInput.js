import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GPTInput = () => {
  const language = useSelector((store) => store?.config?.lang);
  // console.log(language);
  // console.log(lang[language]);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[language]?.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          type="submit"
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTInput;
