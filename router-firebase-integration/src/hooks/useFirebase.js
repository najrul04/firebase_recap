import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({})

const signInWithGoogle = () => {
  
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user)
    console.log(user)
  }).catch((error) => {
    console.log(error);
  });

  console.log('Signing In Soon');
}

const handleSignOut = () => {
  signOut(auth)
  .then(() => {
    
  })
}

useEffect(() => {
  onAuthStateChanged(auth, user => {
    setUser(user);
  })
}, []);

return {
  user,
  handleSignOut,
  signInWithGoogle
  }
}

export default useFirebase;