import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration  
// esta configuracion no deberia estar en mi proyecto, está porque no hay back end
const firebaseConfig = {
  apiKey: "AIzaSyD7bBCDwW5-iZUix5A0QlYlcSEgZm56P5Q",
  authDomain: "bdstonedark.firebaseapp.com",
  projectId: "bdstonedark",
  storageBucket: "bdstonedark.appspot.com",
  messagingSenderId: "616628464877",
  appId: "1:616628464877:web:9b820580bad22f90f930e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <App />
    </ChakraProvider>
)