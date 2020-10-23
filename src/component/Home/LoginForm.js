import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import AppAdvertise from '../AppAdvertise';
import '../Styles/LoginForm.css'

const LoginForm = () => {
    let [ credentials , setCredentials ] = useState({username : '' , password : ''}) ;

    const handleCred = (e) => {
        setCredentials({...credentials ,[e.target.name] : e.target.value})
    }
    let history = useHistory() ;
    const handleLogin = async(e) => {
        e.preventDefault() ;
        console.log("Values passed by user is : " , credentials) ;
        let res = await(await fetch('http://localhost:8080/loginUser' , {
            method : 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            } , 
            body : JSON.stringify(credentials) 
        })).text()
        console.log("This is response at client side : " , res) ;
        if (res === "usr_verified")
            history.push('/dashboard') ;
        else{
            setCredentials({username : '' , password : ''})
            alert("Invalid Credentials") ;
        }
            
    }
    return (
        <div className='login-form'>
            <div className='log-in'>
                <h1 style={{ marginBottom: '30px' }}>Instagram</h1>
                <form>
                    <input type='text' onChange={handleCred} value={credentials.username} name='username' placeholder='Phone number , username or email' />
                    <input type='password' onChange={handleCred} value={credentials.password} name='password' placeholder='Password' />
                    <button className='login-btn' onClick={handleLogin}>Login</button>
                    <a href=''>Forgot password ?</a>
                </form>
            </div>
            <div className='signup-btn'>
                <span>Don't have an account <Link to="/account/signup">signup</Link> </span>
            </div>
            
            <AppAdvertise />
        </div>
    );
}

export default LoginForm;