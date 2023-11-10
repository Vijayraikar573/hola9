import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useState} from 'react';
import "../styles/SignUp.css";


const SignUp = () => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[pass, setPass]=useState("");
    const[error,setError]=useState('');
    const[signupSuccess,setSignupSuccess]=useState(false);

    const navigate=useNavigate();

    const Submit=()=>{

        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!name || !email || !pass){
            setError('Name and Password are required.');
            setSignupSuccess(false);
            return;
        }

        if(!emailRegex.test(email)){
            setError('Invalid email format');
            setSignupSuccess(false);
            return;
        }

        if(pass.length<5){
            setError('Password must be at least 5 characters long');
            setSignupSuccess(false);
            return;
        }

        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('pass',pass);

    
        setSignupSuccess(true);

        navigate('/');
        alert('suceessfully SignedUp! Redirecting to login page...');
    }
   
  return (
    <div className="Signup">
       <h1 className="food">SignUp</h1>
       {signupSuccess && <p style={{color:'green'}}>signup sucessfull! Redirecting to login page...</p>}
                {error && <p style={{color:'red'}}>{error}</p>}
     
       <div className="info">

                <div className="check">
                    <p className="Al">Already user?</p>
                    <Link className="Lo" to='/'>Login</Link>
                    </div>

                <div className="detail">
                    <div className="confirm1">
                    
                <form action="" onSubmit={Submit}>

                    <div className="name">
                    {/* <FontAwesomeIcon icon={}/> */}
                    <i class="fa fa-user" aria-hidden="true"></i>
                <input 
                type="text" 
                placeholder="enter the name" 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                required
                />
                </div>

                 <div className="email1">
                 <i class="fa fa-envelope" aria-hidden="true"></i>
                <input 
                type="text" 
                placeholder="enter the email_id" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                required
                />
                </div>

                <div className="pass1">
                <i className="fa fa-unlock-alt" aria-hidden="false"></i>
                <input type="text" placeholder="enter the password" value={pass} onChange={(e)=>setPass(e.target.value)} />
                </div>
               

                <div className="btn">
                    <button>SIGNUP</button>
                    </div>

                </form>
               
                </div>
                <div className="imgl">
            <img src="images/uplab1.png" alt=""/>
                </div>

            </div>
    </div>
        </div>
  )
}

export default SignUp;
