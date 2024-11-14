import React, { useState } from 'react'
import RGInput from '../components/RGInput';
import RGButton from '../components/RGButton';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
  const [modal, setModal] = useState({userName:"",email:"",password:""})
  const navigate = useNavigate();

  const loginUser = () => {
    try {
      signInWithEmailAndPassword(auth,modal.email,modal.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.uid);
        navigate('/home')
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
    } catch (err) {
      console.log("Error logging in:", err.message);
    }
  }

  return (
    <>
      <div className='bg-black h-screen flex justify-center items-center'>

        <div className='bg-white w-[50%] h-[50%] rounded-lg flex justify-center items-center flex-col'>
          <div className='bg-white w-[50% rounded-lg m-2'>
            <h1 className='text-center font-bold text-2xl p-2'>Login</h1>
          </div>
          <div className='bg-white w-[70%] rounded-lg m-2 p-2'>
            <RGInput
              onChange={e => setModal({ ...modal, userName: e.target.value })}
              type="text"
              label="UserName"
            />
            <RGInput
              onChange={e => setModal({ ...modal, email: e.target.value })}
              type="email"
              label="Email"
            />
            <br />
            <RGInput
              onChange={e => setModal({ ...modal, password: e.target.value })}
              type="password"
              label="Password"
            />
            <br />
            <RGButton type='primary' onClick={() => { loginUser() }} label='Login' />
          </div>
        </div>
      </div>
    </>


  )
}

export default Login
