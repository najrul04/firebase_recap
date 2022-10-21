import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase({});
    return (
        <div>
            <h2>Login</h2>
            <div style={{margin: '20px'}}>
            <button onClick={signInWithGoogle}>Sign In Using Google</button>
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