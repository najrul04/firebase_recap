// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfnILtyizvpxIec0DE270fiOBV9tf_LUQ",
  authDomain: "email-password-auth-cd55a.firebaseapp.com",
  projectId: "email-password-auth-cd55a",
  storageBucket: "email-password-auth-cd55a.appspot.com",
  messagingSenderId: "100826154371",
  appId: "1:100826154371:web:cd61e23a10c83daee762b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;