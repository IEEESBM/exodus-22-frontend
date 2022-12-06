// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Mo9_NQupmOvb8XkdRkwvd57fpuH4v2Q",
  authDomain: "exodus3-1a49a.firebaseapp.com",
  projectId: "exodus3-1a49a",
  storageBucket: "exodus3-1a49a.appspot.com",
  messagingSenderId: "382088475382",
  appId: "1:382088475382:web:754c5e13d66b4eeabaf2d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)