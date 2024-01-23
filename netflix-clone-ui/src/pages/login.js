import React from 'react';
import { useState } from 'react';
import BackgroundImg from '../components/BackgroundImg';
import Header from "../components/Header";
import "../styles/login.css"
import {firebaseAuth} from "../utils/firebase"
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const handleLogIn = async ()=>{
        try{
            const {email, password} = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        }
        catch(err){
            console.log(err);
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(currentUser) navigate("/");
    })
  return (
    <div className='login-container'>
        <BackgroundImg />
        <div className='login-content'>
          <Header signin/>
          <div className='login-main-body'>
            <div className='login-text'>
              <h3 className='login-h3'>Login</h3>
            </div>
            <div className='login-get-info'>
              <input type='email' 
                  placeholder='Email or phone number' 
                  name='email' 
                  value={formValues.email} 
                  onChange={(e) => 
                      setFormValues({...formValues,[e.target.name] : e.target.value,
                      })
                  }
              />
                    
            <input type='password' 
                placeholder='Password' 
                name='password' 
                value={formValues.password} 
                onChange={(e) => 
                    setFormValues({...formValues,[e.target.name] : e.target.value,
                    })
                }
            />
            <button className='login-btn' onClick={handleLogIn}> Login </button>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Login;
