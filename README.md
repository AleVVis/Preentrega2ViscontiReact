# Proyecto de React
## Tienda de Venta de Piedras

### ver markdown en Google favoritos para completarlo

1. npm init vite@latest
1. cd miAPP
1. npm install
1. npm run dev

Gif de mi proyecto [Stone Market](https://mandrillapp.com/track/click/30773215/loom.com?p=eyJzIjoiZWl5S3gzV09rcUdhMDdBMnJvSklMaHlqdmgwIiwidiI6MSwicCI6IntcInVcIjozMDc3MzIxNSxcInZcIjoxLFwidXJsXCI6XCJodHRwczpcXFwvXFxcL2xvb20uY29tXFxcL3NoYXJlXFxcLzUwYjVjMGFjNTMyMzQzNzNiNGZlOWQ2MTY4MDY3ODkzP3NvdXJjZV9lbWFpbD1sb29tLXZpZGVvLWZpcnN0LXZpZXctdXBkYXRlZFwiLFwiaWRcIjpcIjgxZWI1NWYxYWM3ZTQ2MmVhMzFkOGMwODk2YTZlYjhjXCIsXCJ1cmxfaWRzXCI6W1wiNGI4MGI5ZDFlZDdiZmQ1Y2ZjNWI4YTA4NmVhYTUyYWQ4ZGU0NGFjMVwiXX0ifQ).


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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