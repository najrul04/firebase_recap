import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app);

function App() { 

const [user, setUser] = useState({})
  
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user
    setUser(user)
    console.log(user);
  })
  .catch(error => {
    console.log('Error', error)
  })
}

const handleGithubSignIn = () => {
  signInWithPopup(auth, githubProvider)
  .then(result => {
    const user = result.user 
    setUser(user)
    console.log(user)
  })
  .catch(error => {
    console.log(error);
  })
}

const handleGoogleSignOut = () => {
  signOut(auth)
  .then(
    () => {
      setUser({})
    }
  )
  .catch(
    error => {
      setUser({})
    }
  )
}

  
  return (
    <div className='App'>
{
  user.uid ? <button onClick={handleGoogleSignOut}>Sign Out</button> 
  
  :
    <div>
   <button onClick={handleGoogleSignIn}>Google Sign In</button>
   <button onClick={handleGithubSignIn}>GitHub Sign In</button>
      
    </div>
}
      <h2>Name: {user.displayName}</h2>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
