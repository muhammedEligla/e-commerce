// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACURB0y1KXVbqAdsmtgLuUv6MDuE33CYk",
  authDomain: "sopping-app-79f37.firebaseapp.com",
  projectId: "sopping-app-79f37",
  storageBucket: "sopping-app-79f37.appspot.com",
  messagingSenderId: "508020431363",
  appId: "1:508020431363:web:0249a7459bcb4cc45f8c36",
  measurementId: "G-4QF8XEKVD4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);