import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({})

const signInWithGoogle = () => {
  
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    console.log(error);
  });

  console.log('Signing In Soon');
}

return {
  user,
  signInWithGoogle
  }
}

export default useFirebase;