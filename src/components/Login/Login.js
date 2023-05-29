import React from 'react';
import { Button, Form } from 'react-bootstrap';
import"./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useState } from 'react';

const Login = () => {
 const [error,setError]=useState(null)
 const navigate=useNavigate()
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";

 const {signIn}=useContext(AuthContext)

const handleLogin=(event)=>{
  event.preventDefault()
  const form=event.target;
  const email=form.email.value;
  const password=form.password.value;
  signIn(email,password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    // navigate("/orders" )
    navigate(from,{replace:true} )
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    setError("Password did not match")
  });

}

    return (
        <div >
            <h1 className='text-center mt-5'>Login Here</h1>
            <Form className='login' onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
 
      <Button className='login-btn' variant="primary" type="submit">
        Login
      </Button>
      <p className='text-danger'>{error}</p>
      <p>If you are new <Link to="/signup" >Go to SignUp</Link></p>
    </Form>
        </div>
    );
};

export default Login;