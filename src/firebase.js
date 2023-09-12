import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//Paste Firebase COnnection Code Here 
const firebaseConfig = {
    apiKey: "AIzaSyAzYnOsHAP4xZBeXKnb2KIqEeBYWHa5CW4",
    authDomain: "soo-chat-2023.firebaseapp.com",
    projectId: "soo-chat-2023",
    storageBucket: "soo-chat-2023.appspot.com",
    messagingSenderId: "935907579333",
    appId: "1:935907579333:web:719a67dead1259443be7ac",
    measurementId: "G-CGY56CTTN1"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
