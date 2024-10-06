// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAB-U3MO82BjfjPZN60rC4g_foH4qXV08",
  authDomain: "netflixgpt-8578b.firebaseapp.com",
  projectId: "netflixgpt-8578b",
  storageBucket: "netflixgpt-8578b.appspot.com",
  messagingSenderId: "345997934650",
  appId: "1:345997934650:web:8e9d430a943797e965b503",
  measurementId: "G-D32G6RG375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();