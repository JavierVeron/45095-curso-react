import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlnrurRcJ82Dp7bTnCPEbk4ri0m7H9t6g",
  authDomain: "coderhouse-45095.firebaseapp.com",
  projectId: "coderhouse-45095",
  storageBucket: "coderhouse-45095.appspot.com",
  messagingSenderId: "669688363159",
  appId: "1:669688363159:web:d22d82199d7d2a909191d2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
