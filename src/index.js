import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGHQB7-BGup7tFStrrTPxm05PIxo7D_TQ",
  authDomain: "josh-portfolio-18937.firebaseapp.com",
  projectId: "josh-portfolio-18937",
  storageBucket: "josh-portfolio-18937.appspot.com",
  messagingSenderId: "127595685687",
  appId: "1:127595685687:web:32fa12395e1f58bc76dcb2",
  measurementId: "G-063L81J5K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const containter = document.getElementById('root');
const root = ReactDOM.createRoot(containter);

root.render(<App />);

