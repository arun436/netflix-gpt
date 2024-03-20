// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtWZxjUecvAzBJnp_qKi25IxgY5PxmAQ0",
  authDomain: "netflixgpt-ecb31.firebaseapp.com",
  projectId: "netflixgpt-ecb31",
  storageBucket: "netflixgpt-ecb31.appspot.com",
  messagingSenderId: "251451835737",
  appId: "1:251451835737:web:6e64aa2ec860e64df07848",
  measurementId: "G-J102L8ET38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
