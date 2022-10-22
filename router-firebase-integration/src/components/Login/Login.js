import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app);



const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true})
        })
    }
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Login</h2>
            <div style={{margin: '20px'}}>
            <button onClick={handleGoogleSignIn}>Sign In Using Google</button>
            </div> 
            <br />
            <form action="">
            <input type="email" placeholder='Your Email'  name="" id="" /> <br />
            <input type="password" placeholder='Your Password'  name="" id="" /> <br />
            <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;