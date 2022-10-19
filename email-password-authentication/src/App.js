import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import './App.css';
import app from './firebase.init';

const auth = getAuth(app)

function App() {
  
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [validated, setValidated] = useState(false)
  const [registered, setRegistered] = useState(false)

  const handleNameBlur = event =>{
    setName(event.target.value);
  }

  const handleEmailBlur = event =>{
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

     if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)){
      setError('Password should contain at least One special character')
      return;
    } 

    setValidated(true);

    setError('');

    if(registered) {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
        verifyEmail();
        setUserName()

      })
      .catch(error=> {
        console.error(error)
        setError(error.message)
      })
      console.log(email, password);
    }


    event.preventDefault()
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    console.log('Email Sent');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      console.log('Update Name');
    }).catch((error) => {
      // An error occurred
      setError(error.message)
    });
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    console.log('Email Verification sent');
  });
  }

  const handleRegisteredChange = event => {
    setRegistered(event.target.checked)
  }

  return (
    <div>
      
     <div className="registration w-50 mx-auto mt-3 mb-2">
      <h2 className='text-primary'> {registered ? "Login" : "Please Register"}</h2>
     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
{ !registered &&
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onBlur={handleNameBlur}  type="text" placeholder="Your Name" required/>
        <Form.Control.Feedback type="invalid">
              Provide Your Name 
            </Form.Control.Feedback>
      </Form.Group>
}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmailBlur}  type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
              Please choose an Email.
            </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
        <Form.Control.Feedback type="invalid">
              Please Provide a Valid Password.
            </Form.Control.Feedback>
      <small className="text-success">{'Success'}</small>
      <small className="text-danger">{error}</small>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
      </Form.Group> 
      <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button> <br />
      <Button variant="primary" type="submit">
        {registered ? "Login" : "Register"}
      </Button>
    </Form>
     </div>

     {/*

     signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
     
     <form onSubmit={handleFormSubmit} action=""> 
        <input onBlur={handleEmailBlur} type="email" name="" id="" /> 
        <br /> 
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br />
        <input type="submit" value="Login" />
      </form> */}
      
    </div>
  );
}

export default App;
