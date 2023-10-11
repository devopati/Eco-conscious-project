// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx5Ex8Ul6gKYKLg7PQCSENN10K8_F56aQ",
  authDomain: "eco-conscious-bdc4d.firebaseapp.com",
  projectId: "eco-conscious-bdc4d",
  storageBucket: "eco-conscious-bdc4d.appspot.com",
  messagingSenderId: "881142282113",
  appId: "1:881142282113:web:24551d8f8216fb6ede5a80",
  measurementId: "G-RD5VES2GEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
