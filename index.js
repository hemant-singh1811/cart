import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import * as firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAm-Ed41RxIGiEzNmtOoXbCmR_TYiIek1o",
    authDomain: "cart-5593d.firebaseapp.com",
    projectId: "cart-5593d",
    storageBucket: "cart-5593d.appspot.com",
    messagingSenderId: "639308241462",
    appId: "1:639308241462:web:62e3eab1d106ad2823d697"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App/>,document.getElementById('root'));

