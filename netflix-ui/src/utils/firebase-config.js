
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDbyMl1IgQY-OxbKQupUw2nfP6_ls7d5q8",
  authDomain: "react-netflix-clone-9873e.firebaseapp.com",
  projectId: "react-netflix-clone-9873e",
  storageBucket: "react-netflix-clone-9873e.appspot.com",
  messagingSenderId: "848272566815",
  appId: "1:848272566815:web:7671356a7db351a05a032a",
  measurementId: "G-Z51E0VHPFT"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
