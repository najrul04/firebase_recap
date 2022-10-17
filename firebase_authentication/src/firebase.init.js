// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMGWeCpACgxKgV6d-zzj-J5GLTRo_ckxg",
  authDomain: "fir-authentication-49cbb.firebaseapp.com",
  projectId: "fir-authentication-49cbb",
  storageBucket: "fir-authentication-49cbb.appspot.com",
  messagingSenderId: "457826750372",
  appId: "1:457826750372:web:a3828277a5499fe0c03b31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;