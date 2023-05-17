// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtuCOcNf3bnADL_uPqVw118hp02e-Pr2w",
  authDomain: "react-otp-e704a.firebaseapp.com",
  projectId: "react-otp-e704a",
  storageBucket: "react-otp-e704a.appspot.com",
  messagingSenderId: "581896413304",
  appId: "1:581896413304:web:1bc605e14fb8a41ea08d8d"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);