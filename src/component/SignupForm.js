import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Styles/SignupForm.css'
import AppAdvertise from './AppAdvertise';
import { Link } from 'react-router-dom';
import HomeFooter from './HomeFooter';

const SignupForm = () => {
    const [signup_details, setSignup_details] = useState({ email: "", name: "", username: "", password: "" });
    const history = useHistory();

    //Check whether any field is empty or not
    const fieldIsNotEmpty = () => {
        let isEmpty = false ;
        for (var i in signup_details){
            if (signup_details[i] === ''){
                isEmpty = true ;
                break ;
            }
        }
        return isEmpty ;
    }
    
    //Handling onChange of every field
    const handleDetailChange = (e) => {
        setSignup_details({ ...signup_details, [e.target.name]: e.target.value })
    }

    //Form onSubmit database is updated
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(signup_details);
        let res = await (await fetch('http://localhost:8080/isRegistered?email=' + signup_details.email)).text();
        console.log(res) ;
        if (fieldIsNotEmpty()){
            alert("Please check ... Something is Missing")
        }else{
            
            if (res === 'exist') {
                alert("This email id already registered");
            } else {
                await fetch("http://localhost:8080/registerUser", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signup_details)
                })
                history.push('/');
            }
        }

       
    }
    return (
        <div>
            <div className='signup-form'>
                <div className='signup-details'>
                    <h1>Instagram</h1>
                    <p style={{ textAlign: "center" }}>Sign up to see photos and videos from your friends.</p>
                    <button className='login-fb'>Log in with Facebook</button>
                    <p className='or'>OR</p>
                    <form onSubmit={handleOnSubmit}>
                        <input onChange={handleDetailChange} name='email' type='text' placeholder='Mobile Number or Email' />
                        <input onChange={handleDetailChange} name='name' type='text' placeholder='Full Name' />
                        <input onChange={handleDetailChange} name='username' type='text' placeholder='Username' />
                        <input onChange={handleDetailChange} name='password' type='password' placeholder='Password' />
                        <button type='submit'>Sign Up</button>
                    </form>

                    <p className='lower-text'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                </div>
                <div className='login'>
                    <p>Have an account ? <span><Link to='/'>Login</Link></span></p>
                </div>
                <AppAdvertise />

            </div>
            <HomeFooter />
        </div>
    );
}

export default SignupForm;