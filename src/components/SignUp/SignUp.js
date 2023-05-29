import React from 'react';
import "./SignUp.css"
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';



const SignUp = () => {

  const{createUser,profileUpdate,varifyEmail}=useContext(AuthContext)
  const [error,setError]=useState(null)
  const [success,setSuccess]=useState(false)

  const handleRegister=(event)=>{
    event.preventDefault()
    setSuccess(false)
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const confirm=form.confirm.value;
    console.log(password,confirm)
    if(password.lenght<6){
      setError('Password atleast 6 character long')
    }
    if(password !==confirm){
      setError('Password did not match')
    }

    createUser(email,password)
    .then(result=>{
      const user=result.user;
      profileUpdate(name)
      .then(() => {
        
      }).catch((error) => {
        // An error occurred
        
      });
      
      varifyEmail()
      .then(() => {
       // Email verification sent!
       alert("Please check your email")
      });
      form.reset()
    
      setSuccess(true)
      console.log(user)
    })
    .catch(error=>{
      console.error(error.message)
      setError("Email has been already used..Try another email")
    })
  
  
 
  }
    return (
        <div >
            <h1 className='text-center mt-5'>Registration Here</h1>
            <Form className='login' onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" required />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="confirm" placeholder="confirm Password" required />
      </Form.Group>
 
      <Button className='login-btn' variant="primary" type="submit">
        SIgnUp
      </Button>
      <p>Already have an account <Link to="/login" >Go to Login</Link></p>
      {success && <p className="text-success">Account created successfully!!!</p>}
      <p className='error'>{error}</p>
     
    </Form>
    
  
        </div>
    );
};

export default SignUp;