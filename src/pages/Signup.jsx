import React, { useState } from 'react'
import RGInput from '../components/RGInput';
import RGButton from '../components/RGButton';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc,doc } from 'firebase/firestore';
import app from '../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);
const db = getFirestore(app);


export default function Signup() {
  const [modal, setModal] = useState({userName : "",email:"",password:""})
  const navigate = useNavigate();
 
  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth,modal.email,modal.password)
       .then(async(userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        let docRef = doc(db,'users',user.uid)
        await setDoc(docRef,modal)
        alert("Created Account Successfully")
        navigate('/login')
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log('signup err'+errorMessage);
        // ..
      });
    } catch (err) {
      console.log('hendel err'+err.message); // Log error message if there’s an issue
    }   
  }

  return (
    <>
      <div className='bg-black h-screen flex justify-center items-center'>
        <div className='bg-white w-[50%] h-[50%] rounded-lg flex justify-center items-center flex-col'>
          <div className='bg-white w-[50% rounded-lg m-2'>
            <h1 className='text-center font-bold text-2xl p-2'>SignUp</h1>
          </div>
          <div className='bg-white w-[70%] rounded-lg m-2 p-2' >
            <RGInput
              onChange={e => setModal({ ...modal, userName: e.target.value })}
              type="text"
              label="UserName"
            />
            <br />
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
            <RGButton className='m-2' type='primary' onClick={createUser} label='Sign Up' />
            {/* <RGButton className='m-2' type='primary' onClick={navigat} label='Sign Up' /> */}
          </div>
        </div>
      </div>

    </>
  )
}