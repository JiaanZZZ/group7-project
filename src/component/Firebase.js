// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdvlqwWRRq_C99lSyYrz8WTcXAiMl77Ww",
  authDomain: "newsfeed-e894c.firebaseapp.com",
  projectId: "newsfeed-e894c",
  storageBucket: "newsfeed-e894c.appspot.com",
  messagingSenderId: "949333862705",
  appId: "1:949333862705:web:9f013bbe23287bd5b9a810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authFirebase = getAuth(app)
