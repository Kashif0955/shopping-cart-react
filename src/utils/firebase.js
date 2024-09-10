// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import{getFirestore}  from 'firebase/firestore'
import {getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChX5xZ3hzd-7MkBcHhRAUog-WSsysQW50",
  authDomain: "e-commerce-react-cb1e5.firebaseapp.com",
  projectId: "e-commerce-react-cb1e5",
  storageBucket: "e-commerce-react-cb1e5.appspot.com",
  messagingSenderId: "885661125121",
  appId: "1:885661125121:web:b40c241d3e58b14cb9ce00",
  measurementId: "G-D9L3ZQ9HK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage,analytics}