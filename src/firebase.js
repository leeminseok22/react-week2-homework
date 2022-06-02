import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDrdkpengCHa5JadRBjg-bsdaBfvZnMWAM",
  authDomain: "sparta-react-week2-ec556.firebaseapp.com",
  projectId: "sparta-react-week2-ec556",
  storageBucket: "sparta-react-week2-ec556.appspot.com",
  messagingSenderId: "528658286568",
  appId: "1:528658286568:web:6edcd1fbc7003c4f22465d",
  measurementId: "G-XWNJM3GTYW"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();