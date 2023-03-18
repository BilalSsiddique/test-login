// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz2hESzueRtnv6RWSz6Worhl8f42Tc5ys",
  authDomain: "login-screen-dcaae.firebaseapp.com",
  projectId: "login-screen-dcaae",
  storageBucket: "login-screen-dcaae.appspot.com",
  messagingSenderId: "223563584775",
  appId: "1:223563584775:web:1947f564a16b7f60eda1a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)


