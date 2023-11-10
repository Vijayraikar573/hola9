import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../styles/LogIn.css";

const LogIn = () => {
  let [email,setEmail]=useState("");
  let [pass,setPass]=useState("");
  let [error,setError]=useState('');

  const navigate=useNavigate();

  const Submit=()=>{
    if(!email || !pass){
        setError('Email and Password are required.')
        return;
    }
    const storedEmail=localStorage.getItem('email');
    const storedPass=localStorage.getItem('pass');

    if(email===storedEmail && pass===storedPass){
        alert("successfully Login...");
        navigate('/home');  
    }else{
        alert("invalid credentials.please try again.");
    }
  }
 
  return (
    <div className="Login">
    
        <h1 className="food1">Login</h1>
        {error && <p style={{color:'red'}}>{error}</p>}
        <div className="login">

            <div className="imgo">
            <img src="images/uplab.png" alt=""/>
                </div>

                <div className="W">

                <div className="L1">
                    <div className="L2">
                    <p>New User?</p>
                    </div>

                    <div className="L3">
                    <Link to='/SignUp'>Sign up</Link>
                    </div>

                    </div>

                    
                        <div className="detail">
                <form action="" onSubmit={Submit}>
                    
                <div className="email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <input 
                type="text" 
                placeholder="enter the email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
                </div>

                <div className="pass">
                <i className="fa fa-unlock-alt" aria-hidden="false"></i>
                <input 
                type="text" 
                placeholder="enter the password" 
                value={pass} 
                onChange={(e)=>setPass(e.target.value)}
                required
                />
                </div>

                <div className="btn">
                    <button>LOGIN</button>
                    </div>

                </form>
            </div>
                        
                        </div>

                
    </div>
    </div>
  )
}

export default LogIn;
