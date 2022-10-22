// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDwmPUy06scWtw1JtEMYFxcwRwDDc38bU",
  authDomain: "ecommerce-79009.firebaseapp.com",
  projectId: "ecommerce-79009",
  storageBucket: "ecommerce-79009.appspot.com",
  messagingSenderId: "1034768458804",
  appId: "1:1034768458804:web:eeda5a3d23d63fa19d9661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;