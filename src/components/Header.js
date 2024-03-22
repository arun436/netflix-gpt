import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { supportedLanguages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // onAuthStateChanged will be called to change routing.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white hover:cursor-pointer"
              onChange={handleLanguageChange}
            >
              {supportedLanguages?.map((lang) => {
                return (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="hover:cursor-pointer"
                  >
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="py-2 px-4 bg-purple-800 text-white m-2 mx-4 rounded-lg hover:opacity-80"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
          <img className="h-12 w-12" src={user?.photoURL} alt="user-icon" />
          <button
            className="font-bold text-white pl-2 hover:underline"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
